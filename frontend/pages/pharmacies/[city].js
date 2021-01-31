import React, { useState } from "react";

import { useRouter } from 'next/router';

// Layout
import Layout from "../../components/layout/Layout";

// Components
import PharmacyCard from "../../components/pharmacy-card/PharmacyCard";
import Pagination from "../../components/pagination/Pagination";

// Services
import { fetchPharmacies } from "../../services/pharmaciesService";

const Pharmacies = ({pharmacies}) => {

  const router = useRouter();
  let search = router.search;
  let searchParams = new URLSearchParams(search);
  const [currentPage, setCurrentPage] = useState(
    +searchParams.get("page") || 1
  );
  const { city } = router.query;

  return (
    <Layout>
      <div className="pb-21">
        <h1 className="primary-color">
          {city}
        </h1>
        <span>Il y a {pharmacies.total_elements} pharmacies autour de vous</span>
        <hr className="primary-bg-color"/>
      </div>
      {
        pharmacies?.results?.map((pharmacy) => (
          <PharmacyCard 
            key={pharmacy._id} 
            pharmacy={pharmacy }
          />
        ))
      }
      <Pagination
        totalPages={pharmacies.total_elements}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  )
};

export async function getServerSideProps({query}) {
  const { city } = query;
  const pharmacies = await fetchPharmacies(city);
  return {
    props: {
      pharmacies
    },
  };
};

export default Pharmacies;