import { LeadInterface } from 'interfaces/lead';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  lead_id: string;
  created_at?: any;
  updated_at?: any;

  lead?: LeadInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  lead_id?: string;
}
