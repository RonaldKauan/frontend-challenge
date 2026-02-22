import type { ICreateUserData, IUser } from "../types/User";

const getId = () => {
  const currentId = localStorage.getItem("id");

  if (currentId) {
    return parseInt(currentId);
  }

  localStorage.setItem("id", "1");

  return 1;
};

const updateId = () => {
  const id = getId();

  const newId = id + 1;

  localStorage.setItem("id", newId.toString());
};

export const createUser = (data: ICreateUserData, callback: () => void) => {
  const users = getUsers();

  users.push({ ...data, id: getId() });

  updateId();

  localStorage.setItem("users", JSON.stringify(users));

  callback();
};

export const getUsers = (): IUser[] => {
  const currentUsers = localStorage.getItem("users");

  let users: IUser[] = [];

  if (currentUsers) {
    const usersArray = JSON.parse(currentUsers);

    users = [...usersArray];
  }

  return users;
};

export const findUser = (id: number) => {
  const users = getUsers();

  const filteredUser = users.find((user) => user.id === id);

  return filteredUser;
};

export const deleteUser = (id: number) => {
  const users = getUsers();

  const filteredUser = users.filter((user) => user.id !== id);

  localStorage.setItem("users", JSON.stringify(filteredUser));
};
