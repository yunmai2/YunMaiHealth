import { SortOrder } from "../../util/SortOrder";

export type TaskUserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  testId?: SortOrder;
  updatedAt?: SortOrder;
};
