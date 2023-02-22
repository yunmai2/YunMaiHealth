import { User } from "../user/User";

export type Yuyu = {
  createdAt: Date;
  id: string;
  tedt: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
