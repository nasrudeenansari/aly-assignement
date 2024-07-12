"use client";
import styles from "../../app/styles/gallery.module.css";
import mockJson from "../../app/mock.json";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../searchBar/page";
import Tabs from "../Tabs/page";

interface IFilters {
  page: number;
  query: string;
}
const Gallary: React.FC<{}> = ({}) => {
  const [photos, setPhotos] = useState<any>([]);
  const [filter, setFilters] = useState<IFilters>({
    page: 1,
    query: "",
  });

  const { query, page } = filter; // Destructuring

  let customArray = mockJson.photos.map((item) => ({
    src: item.src.original,
    width: item.width,
    height: item.height,
  }));

  const callAPI = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let apiUrl = `/api/search?query=${query}&per_page=5&page=${page}`;

    try {
      const { data } = await axios.get(apiUrl);
      console.log(data, "sdfds");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.message);
      } else {
        alert("Something went wrong...");
      }
    }
  };

  const onChangeHandler = (value: string) => {
    setFilters((prev) => ({ ...prev, query: value }));
  };

  return (
    <>
      <SearchBar
        onChangeHandler={onChangeHandler}
        query={query}
        callAPI={callAPI}
      />
      <Tabs />
      <div className={styles.gallery_wrapper}>
        <p className={styles.result_title}>
          Cars Creative Stock Photos and Images{" "}
          <span className={styles.result_count}>(840,934)</span>
        </p>
      </div>
      <div className={styles.image_gallery}>
        {customArray.map((item, idx) => (
          <div className={styles.image_container} key={idx}>
            <img src={item.src} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallary;
