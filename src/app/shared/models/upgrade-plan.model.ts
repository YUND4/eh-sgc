import { BaseModel } from "../base/base.model";

export class UpgradePlanModel extends BaseModel {
  id: number;
  tracking_id: number;
  upgrade_plan_type: string;
  title: string;
  person_assigned: string;
  init_date: Date;
  end_date: Date;
  unit_measurement: string;
  goal_description: string;
  follow_process_description: string;
  finish_date: Date;
  evidence_file: string;
  percentage: number;
  status: string;
}
