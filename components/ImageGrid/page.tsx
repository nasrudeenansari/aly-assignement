import React, { useState } from "react";
import styles from "../../app/styles/gallery.module.css";
import { IPhoto } from "../Gallery/interface";
import { ImagesIcon, CartIcon, AddIcon, DownloadIcon } from "@/public/icons";

export const ImageGrid: React.FC<{ imageData: IPhoto[]; columns: number }> = ({
  imageData,
  columns,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const downloadImage = (url: string, filename: string) => {
    fetch(url, { method: "GET", headers: {} })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error("Download error:", err));
  };

  const createColumns = () => {
    const columnElements = [];
    for (let i = 0; i < columns; i++) {
      columnElements.push(
        <div className={styles.column} key={i}>
          {imageData
            .filter((_: IPhoto, index: number) => index % columns === i)
            .map((item: IPhoto, index: number) => {
              const isHovered = hoveredId === item.id;
              const photographerNameArr = item?.photographer.split(" ");
              const firstLetter = photographerNameArr[0][0] || "N/";
              const lastLetter =
                photographerNameArr[1]?.length > 0
                  ? photographerNameArr[1][0]
                  : "A";

              return (
                <>
                  <div
                    className={`${styles.img_container} ${
                      isHovered ? styles.visible : ""
                    }`}
                    key={index}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={item.src.original}
                      style={{ width: "100%" }}
                      key={index}
                      alt="grid-item"
                      loading="lazy"
                    />
                    <div
                      className={`${styles.overlay_wrapper} ${
                        isHovered ? styles.overlay_active : ""
                      }`}
                    >
                      <span
                        className={styles.overlay_label}
                        title={item.photographer}
                      >
                        {firstLetter + lastLetter}
                      </span>
                      <strong>{item.id}</strong>
                      <span className="select-none">–</span>
                      <span>{item.alt}</span>
                      <div className={styles.overlay_bottom}>
                        <span>
                          <CartIcon width={18} />
                        </span>
                        <span
                          onClick={() =>
                            downloadImage(item.src.original, `${item.id}.jpg`)
                          }
                        >
                          <DownloadIcon />
                        </span>
                        <span>
                          <AddIcon />
                        </span>
                        <span>
                          <ImagesIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      );
    }
    return columnElements;
  };

  return <div className={styles.row}>{createColumns()}</div>;
};
