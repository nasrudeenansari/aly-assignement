"use client";
import styles from "../../app/styles/gallery.module.css";
import { useState } from "react";
import SearchBar from "../searchBar/page";
import Tabs from "../Tabs/page";
import Image from "next/image";

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
  response: {
    next_page: string;
    total_results: number;
    page: number;
    per_page: number;
    photos: IPhoto[];
  };
}

const Gallary: React.FC<GalleryProps> = ({ response, initialQuery }) => {
  const [photos, setPhotos] = useState<IPhoto[]>(response.photos || []);
  const [filter, setFilters] = useState<IFilters>({
    page: response.page || 1,
    query: initialQuery || "",
  });

  const { query, page } = filter; // Destructuring

  const onChangeHandler = (value: string) => {
    setFilters((prev) => ({ ...prev, query: value }));
  };

  return (
    <>
      <SearchBar onChangeHandler={onChangeHandler} query={query} />
      <Tabs />
      <div className={styles.gallery_wrapper}>
        <p className={styles.result_title}>
          <span>{query}</span> Stock Photos and Images{" "}
          <span className={styles.result_count}>(840,934)</span>
        </p>
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
    </>
  );
};

export default Gallary;
