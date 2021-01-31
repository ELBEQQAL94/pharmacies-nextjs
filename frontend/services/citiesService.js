import { API_CITIES_URL } from "../constants/apiCitiesUrl";

async function fetchCities() {
  const response = await fetch(API_CITIES_URL);
  const cities = await response.json();
  return cities;
};

export { fetchCities };