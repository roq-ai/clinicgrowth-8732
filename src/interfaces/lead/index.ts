import { AppointmentInterface } from 'interfaces/appointment';
import { PipelineInterface } from 'interfaces/pipeline';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface LeadInterface {
  id?: string;
  name: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  pipeline?: PipelineInterface[];
  business?: BusinessInterface;
  _count?: {
    appointment?: number;
    pipeline?: number;
  };
}

export interface LeadGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  business_id?: string;
}
