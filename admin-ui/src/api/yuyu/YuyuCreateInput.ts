import { UserCreateNestedManyWithoutYuyusInput } from "./UserCreateNestedManyWithoutYuyusInput";

export type YuyuCreateInput = {
  tedt?: string | null;
  users?: UserCreateNestedManyWithoutYuyusInput;
};
