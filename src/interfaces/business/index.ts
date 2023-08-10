import { LeadInterface } from 'interfaces/lead';
import { WorkflowInterface } from 'interfaces/workflow';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  lead?: LeadInterface[];
  workflow?: WorkflowInterface[];
  user?: UserInterface;
  _count?: {
    lead?: number;
    workflow?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
