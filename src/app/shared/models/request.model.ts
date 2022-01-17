import { BaseModel } from "../base/base.model";

export class RequestModel extends BaseModel {
  init_date: Date;
  detected_date: Date;
  detected_in: string;
  detected_for_id: number;
  unfulfilled_requirement: string;
  process_lead_id: number;
  process_affected: string;
  how_detected: string;
  action_type: string;
  request_code: string;
  evidence_description: string;
  request_description: string;
  evidence_file: any;
  request_type: string;
  status: string;
  id: number;
}
