import { InputJsonValue } from "../../types";
import { TsetUpdateManyWithoutUsersInput } from "./TsetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tsets?: TsetUpdateManyWithoutUsersInput;
  username?: string;
};
