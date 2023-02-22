import { TsetWhereInput } from "./TsetWhereInput";
import { TsetOrderByInput } from "./TsetOrderByInput";

export type TsetFindManyArgs = {
  where?: TsetWhereInput;
  orderBy?: Array<TsetOrderByInput>;
  skip?: number;
  take?: number;
};
