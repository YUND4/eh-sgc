import { BaseModel } from "../base/base.model";

export class RequestModel extends BaseModel {
  init_date: Date;
  detected_date: Date;
  detected_in_code: string;
  detected_for_id: number;
  unfulfilled_requirement_code: string;
  process_lead_id: number;
  process_affected_code: string;
  how_detected_code: string;
  action_type_code: string;
  request_code: string;
  evidence_description: string;
  request_description: string;
  evidence_file: any;
  request_type_code: string;
  status_code: string;
  id: number;
}
