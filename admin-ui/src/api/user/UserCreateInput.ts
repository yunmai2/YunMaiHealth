import { InputJsonValue } from "../../types";
import { TsetCreateNestedManyWithoutUsersInput } from "./TsetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tsets?: TsetCreateNestedManyWithoutUsersInput;
  username: string;
};
