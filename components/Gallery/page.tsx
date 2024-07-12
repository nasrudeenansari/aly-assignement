"use client";
import styles from "../../app/styles/gallery.module.css";
import { useState } from "react";
import SearchBar from "../searchBar/page";
import Tabs from "../Tabs/page";
import Image from "next/image";
import Pagination from "../Pagination/page";

interface IFilters {
  page: number;
  query: string;
}

interface IPhoto {
  id: String;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: IPhotoSrc;
  liked: boolean;
  alt: string;
}
interface IPhotoSrc {
  landscape: string;
  large: string;
  large2x: string;
  medium: string;
  original: string;
  portrait: string;
  small: string;
  tiny: string;
}
interface GalleryProps {
  initialQuery: string;
  totalPages: number;
  response: {
    next_page: string;
    total_results: number;
    page: number;
    per_page: number;
    photos: IPhoto[];
  };
}

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
          <div className={styles.image_gallery}>
            {photos.map((item: IPhoto, idx) => (
              <div className={styles.image_container} key={idx}>
                <Image
                  src={item.src.original}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
