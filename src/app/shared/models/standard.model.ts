import { BaseModel } from "../base/base.model";

export class StandardModel extends BaseModel {
  id: number;
  standard_type: string;
  description: string;
  user_id: number;
  follow: string;
  percentage: number;
}
