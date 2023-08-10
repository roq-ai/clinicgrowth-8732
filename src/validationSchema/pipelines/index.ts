import * as yup from 'yup';

export const pipelineValidationSchema = yup.object().shape({
  stage: yup.string().required(),
  lead_id: yup.string().nullable().required(),
});
