import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://6023-136-158-41-234.ngrok.io/mealstogo-e2e6a/us-central1/geocode?city=${searchTerm}`
  ).then(res => res.json());
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
