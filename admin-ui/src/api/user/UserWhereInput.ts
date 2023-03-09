import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { YuyuListRelationFilter } from "../yuyu/YuyuListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  loginInfo?: YuyuListRelationFilter;
  username?: StringFilter;
};
