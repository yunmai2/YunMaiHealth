import { InputJsonValue } from "../../types";
import { TaskUserUpdateManyWithoutUsersInput } from "./TaskUserUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tsets?: TaskUserUpdateManyWithoutUsersInput;
  username?: string;
};
