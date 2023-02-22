import { Yuyu } from "../yuyu/Yuyu";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loginInfo?: Array<Yuyu>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
