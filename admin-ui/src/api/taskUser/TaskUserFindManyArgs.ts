import { TaskUserWhereInput } from "./TaskUserWhereInput";
import { TaskUserOrderByInput } from "./TaskUserOrderByInput";

export type TaskUserFindManyArgs = {
  where?: TaskUserWhereInput;
  orderBy?: Array<TaskUserOrderByInput>;
  skip?: number;
  take?: number;
};
