import { useState, useEffect } from "react";

import { useRouter } from 'next/router';

// Layout
import Layout from "../../components/layout/Layout";

// Components
import PharmacyCard from "../../components/pharmacy-card/PharmacyCard";
import Pagination from "../../components/pagination/Pagination";

// Services
import { fetchPharmacies } from "../../services/pharmaciesService";

const Pharmacies = ({ pharmacies }) => {

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(
    +router.query.page || 1
  );
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  router.query.page = currentPage;
  const { city } = router.query;

  useEffect(() => {
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
    }
  }, []);

  return (
    <Layout>
      {
        isLoading
          ?
          (<h1>Loading...</h1>)
          :
          <>
            <div className="pb-21">

              <h1 className="primary-color">
                {city}
              </h1>
              <span>Il y a {pharmacies.total_elements} pharmacies autour de vous</span>
              <hr className="primary-bg-color" />
            </div>
            {
              pharmacies?.results?.map((pharmacy) => (
                <PharmacyCard
                  key={pharmacy._id}
                  pharmacy={pharmacy}
                />
              ))
            }
          </>
      }
      <Pagination
        totalPages={pharmacies.total_pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  )
};

export async function getServerSideProps({ query }) {
  const { city, page } = query;
  const pharmacies = await fetchPharmacies(city, page);
  return {
    props: {
      pharmacies
    },
  };
};

export default Pharmacies;