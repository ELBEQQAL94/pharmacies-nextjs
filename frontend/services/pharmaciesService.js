import { API_PHARMACIES_URL } from "../constants/apiPharmaciesUrl";

async function fetchPharmacies(city) {
  const response = await fetch(`${API_PHARMACIES_URL}/${city}`);
  const cities = await response.json();
  return cities;
};

export { fetchPharmacies };