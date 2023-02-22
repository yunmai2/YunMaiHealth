import { User } from "../user/User";

export type Tset = {
  createdAt: Date;
  id: string;
  test?: User | null;
  updatedAt: Date;
};
