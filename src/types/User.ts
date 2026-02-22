export interface IUser {
  id: number;
  name: string;
  matricula: string;
  email: string;
  senha: string;
}

export interface ICreateUserData {
  name: string;
  matricula: string;
  email: string;
  senha: string;
}
