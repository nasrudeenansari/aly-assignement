"use client";
import styles from "../../app/styles/gallery.module.css";
import { useState } from "react";
import SearchBar from "../searchBar/page";
import Tabs from "../Tabs/page";
import Pagination from "../Pagination/page";
import { GalleryProps, IPhoto, IFilters } from "./interface";
import { ImageGrid } from "../ImageGrid/page";

const Gallary: React.FC<GalleryProps> = ({
  response,
  initialQuery,
  totalPages,
}) => {
  const [photos, setPhotos] = useState<IPhoto[]>(response?.photos || []);
  const [filter, setFilters] = useState<IFilters>({
    page: response?.page || 1,
    query: initialQuery || "",
  });

  const { query, page } = filter; // Destructuring

  const onChangeHandler = (value: string) => {
    setFilters((prev) => ({ ...prev, query: value }));
  };

  const updatePage = (newPage: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (newPage < 1 || newPage > totalPages) return;

    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());

    window.location.replace(url.toString());
  };

  return (
    <>
      <SearchBar onChangeHandler={onChangeHandler} query={query} />
      <Tabs />
      {photos?.length < 1 ? (
        <div className={styles.not_found_section}>
          <h3>
            Sorry, we couldn’t find any results for “sdfdsfdsfdsfdsfdsfcars”
          </h3>
        </div>
      ) : (
        <div className={styles.gallery_wrapper}>
          <div className={styles.result_section}>
            <p className={styles.result_title}>
              <span>{initialQuery}</span> Stock Photos and Images{" "}
              <span className={styles.result_count}>
                ({response?.total_results})
              </span>
            </p>
            <Pagination totalPages={totalPages} page={page} />
          </div>
          <ImageGrid imageData={photos} columns={3} />

          <div className={styles.next_page_btn}>
            <button
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                updatePage(page + 1, e)
              }
            >
              Next page
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallary;
