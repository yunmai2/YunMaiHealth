import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUserWhereInput = {
  id?: StringFilter;
  test?: UserWhereUniqueInput;
};
