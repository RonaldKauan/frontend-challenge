import z from "zod";

export const createUserSchema = z
  .object({
    nome: z
      .string()
      .min(1, "Campo Obrigatório")
      .max(30, "Máximo de caractéres ultrapassado")
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Apenas letras são permitidas"),
    email: z
      .email("Campo Obrigatório")
      .max(40, "Máximo de caractéres ultrapassado"),
    matricula: z
      .string()
      .min(4, "Campo Obrigatório")
      .max(10, "Máximo de caractéres ultrapassado")
      .regex(/^\d+$/, "Apenas números são permitidos"),
    senha: z
      .string()
      .regex(
        /^[A-Za-z0-9]{6}$/,
        "A senha deve conter exatamente 6 caracteres alfanuméricos",
      ),
    repetirSenha: z
      .string()
      .regex(
        /^[A-Za-z0-9]{6}$/,
        "A senha deve conter exatamente 6 caracteres alfanuméricos",
      ),
  })
  .superRefine((data, ctx) => {
    if (data.senha !== data.repetirSenha) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não se correspondem",
        path: ["repetirSenha"],
      });
    }
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
