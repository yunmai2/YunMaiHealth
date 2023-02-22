import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskUserListRelationFilter } from "../taskUser/TaskUserListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tsets?: TaskUserListRelationFilter;
  username?: StringFilter;
};
