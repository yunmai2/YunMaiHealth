import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TsetWhereInput = {
  id?: StringFilter;
  test?: UserWhereUniqueInput;
};
