import { BaseModel } from "../base/base.model";

export class StandardDefinitionModel extends BaseModel {
  tracking_id: number;
  indicator: string;
  event: string;
  time: string;
  what_indicator: string;
  what_event: string;
  what_time_init: Date;
  what_time_end: Date;
  description: string;
}
