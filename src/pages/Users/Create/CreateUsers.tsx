import { Link } from "react-router";

import { type CreateUserSchema } from "../../../schemas/createUser";

import BackIcon from "../../../assets/back-icon.svg";

import Breadcrumb, {
  type BreadcrumbItem,
} from "../../../components/ui/Breadcrumb/Breadcrumb";

import CreateUserForm from "../../../components/CreateUserForm/CreateUserForm";

const CREATE_USERS_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: "Usuários", href: "/users" },
  { label: "Cadastro de Usuário" },
];

const CreateUsers: React.FC = () => {
  const onSubmit = (data: CreateUserSchema) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Breadcrumb items={CREATE_USERS_BREADCRUMB_ITEMS} />

      <div className="flex items-center gap-2">
        <Link to="/">
          <BackIcon />
        </Link>

        <h1 className="text-[2.375rem] font-bold">Cadastro de Usuário</h1>
      </div>

      <CreateUserForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreateUsers;
