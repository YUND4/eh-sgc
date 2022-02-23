import { BaseModel } from "../base/base.model";

export class TrackingIssueModel extends BaseModel {
  id: number;
  tracking_id: string;
  title: string;
  description: string;
  icon: string;
}
