import { Link, useNavigate, useParams } from "react-router";

import { type CreateUserSchema } from "../../../schemas/createUser";

import BackIcon from "../../../assets/back-icon.svg";

import Breadcrumb, {
  type BreadcrumbItem,
} from "../../../components/ui/Breadcrumb/Breadcrumb";

import CreateUserForm from "../../../components/CreateUserForm/CreateUserForm";

import type { ICreateUserData } from "../../../types/User";
import { createUser, findUser } from "../../../services/User";

import useModal from "../../../hooks/useModal";

const CREATE_USER_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: "Usuários", href: "/users" },
  { label: "Cadastro de Usuário" },
];

const EDIT_USER_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: "Usuários", href: "/users" },
  { label: "Editar Usuário" },
];

interface CreateUsersProps {
  isEditing: boolean;
}

const CreateUsers: React.FC<CreateUsersProps> = ({ isEditing }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { openModal, closeModal } = useModal();

  const userInformation = findUser(parseInt(id ?? "0"));

  const BREADCRUMB_ITEMS = isEditing
    ? EDIT_USER_BREADCRUMB_ITEMS
    : CREATE_USER_BREADCRUMB_ITEMS;

  const PAGE_TITLE = isEditing ? "Editar Usuário" : "Cadastro de Usuário";

  const onSubmit = (data: CreateUserSchema) => {
    if (isEditing) return;

    console.log(data);

    const createUserData: ICreateUserData = {
      email: data.email,
      matricula: data.matricula,
      name: data.nome,
      senha: data.senha,
    };

    createUser(createUserData, () => {
      navigate("/users");
    });
  };

  const handleCancel = () => {
    openModal({
      title: "Deseja cancelar?",
      message: "Os dados inseridos não serão salvos",
      primaryButtonText: "Sim",
      secondaryButtonText: "Não",
      primaryButtonAction: () => {
        closeModal();

        setTimeout(() => {
          navigate("/users");
        }, 500);
      },
      secondaryButtonAction: () => {
        closeModal();
      },
    });
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className="flex items-center gap-2">
        <Link to="/users">
          <BackIcon />
        </Link>

        <h1 className="text-[2.375rem] font-bold">{PAGE_TITLE}</h1>
      </div>

      <CreateUserForm
        initialValue={userInformation}
        onSubmit={onSubmit}
        isEditing={isEditing}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default CreateUsers;
