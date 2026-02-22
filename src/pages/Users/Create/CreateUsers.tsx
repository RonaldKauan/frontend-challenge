import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  createUserSchema,
  type CreateUserSchema,
} from "../../../schemas/createUser";

import BackIcon from "../../../assets/back-icon.svg";

import FormInput from "../../../components/ui/Form/FormInput/FormInput";
import FormSection from "../../../components/ui/Form/FormSection/FormSection";
import FormButton from "../../../components/ui/Form/FormButton/FormButton";

import Breadcrumb, {
  type BreadcrumbItem,
} from "../../../components/ui/Breadcrumb/Breadcrumb";

const CREATE_USERS_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: "Usuários", href: "/users" },
  { label: "Cadastro de Usuário" },
];

const CreateUsers: React.FC = () => {
  const { register, handleSubmit, watch, trigger, formState } = useForm({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
  });

  const isFormValid = formState.isValid;

  const nome = watch("nome");
  const matricula = watch("matricula");
  const email = watch("email");
  const senha = watch("senha");
  const repetirSenha = watch("repetirSenha");

  useEffect(() => {
    if (senha?.length > 0) {
      trigger("repetirSenha");
    }
  }, [senha, trigger]);

  const onSubmit = (data: CreateUserSchema) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <Breadcrumb items={CREATE_USERS_BREADCRUMB_ITEMS} />

      <div className="flex items-center gap-2">
        <BackIcon />
        <h1 className="text-[2.375rem] font-bold">Cadastro de Usuário</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-[0px_1px_4px_#00000029] p-5 rounded-[5px]"
      >
        <div>
          <FormSection section="Dados do Usuário" />

          <div className="grid grid-cols-2 gap-2">
            <FormInput
              placeholder="Insira o nome completo*"
              label="Nome Completo"
              errorMessage={formState.errors?.nome?.message ?? ""}
              helperText="Máx. 30 Caracteres"
              currentValue={nome}
              {...register("nome")}
            />

            <FormInput
              placeholder="Insira o Nº da matrícula"
              label="Matrícula"
              errorMessage={formState.errors?.matricula?.message ?? ""}
              helperText="Mín. 4 Dígitos | • Máx. 10 Dígitos"
              currentValue={matricula}
              {...register("matricula")}
            />

            <FormInput
              placeholder="Insira o E-mail*"
              label="E-mail"
              errorMessage={formState.errors?.email?.message ?? ""}
              helperText="Máx. 40 Caracteres"
              currentValue={email}
              {...register("email")}
            />
          </div>
        </div>
        <div>
          <FormSection section="Dados de acesso" />

          <div className="grid grid-cols-2 gap-2">
            <FormInput
              placeholder="Senha"
              label="Senha"
              errorMessage={formState.errors?.senha?.message ?? ""}
              currentValue={senha}
              type="password"
              {...register("senha")}
            />

            <FormInput
              placeholder="Repetir Senha"
              label="Repetir Senha"
              errorMessage={formState.errors?.repetirSenha?.message ?? ""}
              currentValue={repetirSenha}
              type="password"
              {...register("repetirSenha")}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2.5 mt-20">
          <FormButton mode="secondary">Cancelar</FormButton>

          <FormButton
            mode="primary"
            type="submit"
            disabled={isFormValid === false}
          >
            Cadastrar
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default CreateUsers;
