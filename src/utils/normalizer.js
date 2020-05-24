import { normalize, schema } from 'normalizr';

export const normalizer = (data, schemaValue) => {
  const normalizerSchema = new schema.Entity(schemaValue);
  const schemaReady = [normalizerSchema];
  return normalize(data, schemaReady);
};
