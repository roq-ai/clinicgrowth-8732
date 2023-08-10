import { LeadInterface } from 'interfaces/lead';
import { GetQueryInterface } from 'interfaces';

export interface PipelineInterface {
  id?: string;
  stage: string;
  lead_id: string;
  created_at?: any;
  updated_at?: any;

  lead?: LeadInterface;
  _count?: {};
}

export interface PipelineGetQueryInterface extends GetQueryInterface {
  id?: string;
  stage?: string;
  lead_id?: string;
}
