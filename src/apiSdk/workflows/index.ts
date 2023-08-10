import axios from 'axios';
import queryString from 'query-string';
import { WorkflowInterface, WorkflowGetQueryInterface } from 'interfaces/workflow';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWorkflows = async (
  query?: WorkflowGetQueryInterface,
): Promise<PaginatedInterface<WorkflowInterface>> => {
  const response = await axios.get('/api/workflows', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWorkflow = async (workflow: WorkflowInterface) => {
  const response = await axios.post('/api/workflows', workflow);
  return response.data;
};

export const updateWorkflowById = async (id: string, workflow: WorkflowInterface) => {
  const response = await axios.put(`/api/workflows/${id}`, workflow);
  return response.data;
};

export const getWorkflowById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/workflows/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWorkflowById = async (id: string) => {
  const response = await axios.delete(`/api/workflows/${id}`);
  return response.data;
};
