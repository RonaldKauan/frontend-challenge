import { useEffect } from "react";

import {
  createUserSchema,
  type CreateUserSchema,
} from "../../schemas/createUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormButton from "../ui/Form/FormButton/FormButton";
import FormInput from "../ui/Form/FormInput/FormInput";
import FormSection from "../ui/Form/FormSection/FormSection";

import type { IUser } from "../../types/User";

interface CreateUserFormProps {
  initialValue?: IUser;
  onSubmit: (data: CreateUserSchema) => void;
  isEditing: boolean;
  handleCancel: (isDirty: boolean) => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({
  initialValue,
  onSubmit,
  isEditing,
  handleCancel,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { isDirty, isValid, errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
    defaultValues: {
      nome: initialValue?.name ?? "",
      matricula: initialValue?.matricula ?? "",
      email: initialValue?.email ?? "",
      senha: initialValue?.senha ?? "",
      repetirSenha: initialValue?.senha ?? "",
    },
  });

  const submitButtonLabel = isEditing ? "Salvar" : "Cadastrar";

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

  return (
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
            errorMessage={errors?.nome?.message ?? ""}
            helperText="Máx. 30 Caracteres"
            currentValue={nome}
            {...register("nome")}
          />

          <FormInput
            placeholder="Insira o Nº da matrícula"
            label="Matrícula"
            errorMessage={errors?.matricula?.message ?? ""}
            helperText="Mín. 4 Dígitos | • Máx. 10 Dígitos"
            currentValue={matricula}
            {...register("matricula")}
          />

          <FormInput
            placeholder="Insira o E-mail*"
            label="E-mail"
            errorMessage={errors?.email?.message ?? ""}
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
            errorMessage={errors?.senha?.message ?? ""}
            currentValue={senha}
            type="password"
            {...register("senha")}
          />

          <FormInput
            placeholder="Repetir Senha"
            label="Repetir Senha"
            errorMessage={errors?.repetirSenha?.message ?? ""}
            currentValue={repetirSenha}
            type="password"
            {...register("repetirSenha")}
          />
        </div>
      </div>
      <div className="flex justify-end gap-2.5 mt-20">
        <FormButton
          mode="secondary"
          onClick={(e) => {
            e.preventDefault();
            handleCancel(isDirty);
          }}
        >
          Cancelar
        </FormButton>

        <FormButton mode="primary" type="submit" disabled={isValid === false}>
          {submitButtonLabel}
        </FormButton>
      </div>
    </form>
  );
};

export default CreateUserForm;
