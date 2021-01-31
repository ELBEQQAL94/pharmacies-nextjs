import { useEffect } from "react";

import { useRouter } from "next/router";

// Material UI Pagination
import Pagination from "@material-ui/lab/Pagination";

// add query
import { setQueryToUrl } from "../../utils/setQueryToUrl";

// CSS
import styles from '../../styles/Pagination.module.css';


const PaginationComponent = ({ 
  currentPage, 
  setCurrentPage, 
  totalPages,
}) => {
  const router = useRouter();
  let history = router.history;
  let pathname = router.pathname;
  let search = router.search;

  useEffect(() => 
    setQueryToUrl("page", currentPage, router)
  , [currentPage]);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.pagination}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePage}
      />
    </div>
  );
};

export default PaginationComponent;