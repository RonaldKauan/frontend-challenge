import z from "zod";

export const createUserSchema = z
  .object({
    nome: z
      .string()
      .min(1, "Campo Obrigatório")
      .max(30, "Máximo de caractéres ultrapassado"),
    email: z
      .email("Campo Obrigatório")
      .max(40, "Máximo de caractéres ultrapassado"),
    matricula: z
      .string()
      .min(4, "Campo Obrigatório")
      .max(10, "Máximo de caractéres ultrapassado"),
    senha: z
      .string()
      .min(6, "Campo Obrigatório")
      .max(6, "A senha deve conter 6 dígitos"),
    repetirSenha: z
      .string()
      .min(6, "Campo Obrigatório")
      .max(6, "A senha deve conter 6 dígitos"),
  })
  .superRefine((data, ctx) => {
    if (data.senha !== data.repetirSenha) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "As senhas não se correspondem",
        path: ["repetirSenha"],
      });
    }
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
