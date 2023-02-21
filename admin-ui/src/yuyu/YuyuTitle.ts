import { Yuyu as TYuyu } from "../api/yuyu/Yuyu";

export const YUYU_TITLE_FIELD = "tedt";

export const YuyuTitle = (record: TYuyu): string => {
  return record.tedt || String(record.id);
};
