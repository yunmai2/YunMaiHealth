import { JsonValue } from "type-fest";
import { Tset } from "../tset/Tset";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tsets?: Array<Tset>;
  updatedAt: Date;
  username: string;
};
