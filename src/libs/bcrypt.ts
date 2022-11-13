import { compare } from "bcryptjs";


export const comparePassword = async (password: string, oldPassword: string) =>
  await compare(oldPassword, password);