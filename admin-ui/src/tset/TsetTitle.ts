import { Tset as TTset } from "../api/tset/Tset";

export const TSET_TITLE_FIELD = "id";

export const TsetTitle = (record: TTset): string => {
  return record.id || String(record.id);
};
