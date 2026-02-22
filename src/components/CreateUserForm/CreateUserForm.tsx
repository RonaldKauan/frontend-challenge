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

interface CreateUserFormProps {
  onSubmit: (data: CreateUserSchema) => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onSubmit }) => {
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
  );
};

export default CreateUserForm;
