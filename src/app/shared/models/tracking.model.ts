import { BaseModel } from "../base/base.model";

export class TrackingModel extends BaseModel {
  id: number;
  request_id: number;
  step_count: number;
  last_step_complete: number;
  status: string;
}
