import { User } from "../user/User";

export type TaskUser = {
  createdAt: Date;
  id: string;
  test?: User | null;
  updatedAt: Date;
};
