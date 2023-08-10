import axios from 'axios';
import queryString from 'query-string';
import { PipelineInterface, PipelineGetQueryInterface } from 'interfaces/pipeline';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPipelines = async (
  query?: PipelineGetQueryInterface,
): Promise<PaginatedInterface<PipelineInterface>> => {
  const response = await axios.get('/api/pipelines', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPipeline = async (pipeline: PipelineInterface) => {
  const response = await axios.post('/api/pipelines', pipeline);
  return response.data;
};

export const updatePipelineById = async (id: string, pipeline: PipelineInterface) => {
  const response = await axios.put(`/api/pipelines/${id}`, pipeline);
  return response.data;
};

export const getPipelineById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pipelines/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePipelineById = async (id: string) => {
  const response = await axios.delete(`/api/pipelines/${id}`);
  return response.data;
};
