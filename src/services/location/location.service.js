import { host, isMock } from "../../utils/env";
import camelize from "camelize";

export const locationRequest = (searchTerm) => fetch(
  `${host}/geocode?city=${searchTerm}&mock=${isMock}`
).then(res => res.json());

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
