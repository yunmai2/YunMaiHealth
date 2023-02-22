import { JsonValue } from "type-fest";
import { TaskUser } from "../taskUser/TaskUser";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tsets?: Array<TaskUser>;
  updatedAt: Date;
  username: string;
};
