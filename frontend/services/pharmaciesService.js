import { API_PHARMACIES_URL } from "../constants/apiPharmaciesUrl";

async function fetchPharmacies(city, page) {
  const response = await fetch(`${API_PHARMACIES_URL}/${city}?page=${page}`);
  const cities = await response.json();
  return cities;
};

export { fetchPharmacies };