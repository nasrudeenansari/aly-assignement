import styles from "../../app/styles/footerPagination.module.css";
import Pagination from "../Pagination/page";

const FooterPagination: React.FC<{
  totalPages: number;
  page: number;
  total_results: number;
  query: string;
}> = ({ totalPages, page, total_results, query }) => {
  //Don't render this component when there is no record found
  if (totalPages < 1) return null;

  return (
    <div className={styles.footerPagination_wrapper}>
      <p className={styles.result_title}>
        Search result for <span>{query}</span> Stock Photos and Images{" "}
        <span className={styles.result_count}>({total_results})</span>
      </p>
      <Pagination totalPages={totalPages} page={page} />
    </div>
  );
};

export default FooterPagination;
