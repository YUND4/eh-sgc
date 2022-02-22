import { BaseModel } from "../base/base.model";

export class WorkTeamUserModel extends BaseModel {
  id: number;
  user_id: number;
  area: string;
  position: string;
}
