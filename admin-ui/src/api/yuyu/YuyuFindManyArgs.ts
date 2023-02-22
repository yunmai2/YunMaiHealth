import { YuyuWhereInput } from "./YuyuWhereInput";
import { YuyuOrderByInput } from "./YuyuOrderByInput";

export type YuyuFindManyArgs = {
  where?: YuyuWhereInput;
  orderBy?: Array<YuyuOrderByInput>;
  skip?: number;
  take?: number;
};
