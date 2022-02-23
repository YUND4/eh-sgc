import { BaseModel } from "../base/base.model";

export class FinishRequestModel extends BaseModel {
  request_id: number;
  tracking_id: number;
  user_tracking_id: number;
  tracking_date: string;
  tracking_date_period_init: Date;
  tracking_date_period_end: Date;
  result: string;
  result_analysis: string;
  user_granted_id: number;
  descriptions: string;
  objective: string;
  total_review: string;
  total_agree: string;
  total_disagre: string;
  percentage: number;
  agree: string;
}
