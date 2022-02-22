import { BaseModel } from "../base/base.model";

export class AnalysisDefinitionModel extends BaseModel {
  tracking_id: number;
  problem_understand: string;
  local_revision: string;
  viability_test: string;
}
