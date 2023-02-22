import { InputJsonValue } from "../../types";
import { TaskUserCreateNestedManyWithoutUsersInput } from "./TaskUserCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tsets?: TaskUserCreateNestedManyWithoutUsersInput;
  username: string;
};
