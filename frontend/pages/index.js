import Router from 'next/router';

import styles from '../styles/Home.module.css';

// Layout
import Layout from "../components/layout/Layout";

// Services
import { fetchCities } from "../services/citiesService";

export default function Home({ cities }) {

  const redirect = (city) => Router.push(`/pharmacies/${city}`);

  const handleChange = (e) => redirect(e.target.value);

  return (
    <Layout>
      <>
        <h1 className={styles.title}>
          Saydali Yati.
        </h1>
        <select onChange={handleChange} className={`form-select form-select-lg mb-3 ${styles.customeSelectBar}`}>
          <option value="">Choisir votre ville</option>
          {
            cities.map((city) => (
              <option key={city._id} value={city.name}>
                {city.name}
              </option>
            ))
          }
        </select>
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  const cities = await fetchCities();
  return {
    props: {
      cities
    }
  }
}