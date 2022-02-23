import { BaseModel } from "../base/base.model";

export class AnalysisModel extends BaseModel {
  tracking_id: number;
  root: string;
  cause: string;
  analysis_result: string;
}
