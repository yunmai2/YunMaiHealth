import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type YuyuWhereInput = {
  id?: StringFilter;
  tedt?: StringNullableFilter;
  users?: UserListRelationFilter;
};
