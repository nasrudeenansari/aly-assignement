import React from "react";
import styles from "../../app/styles/gallery.module.css";
import { IPhoto } from "../Gallery/interface";

export const ImageGrid: React.FC<{ imageData: IPhoto[]; columns: number }> = ({
  imageData,
  columns,
}) => {
  const createColumns = () => {
    const columnElements = [];
    for (let i = 0; i < columns; i++) {
      columnElements.push(
        <div className={styles.column} key={i}>
          {imageData
            .filter((_: IPhoto, index: number) => index % columns === i)
            .map((item: IPhoto, index: number) => (
              <img
                src={item.src.original}
                style={{ width: "100%" }}
                key={index}
                alt="grid-item"
                loading="lazy"
              />
            ))}
        </div>
      );
    }
    return columnElements;
  };

  return <div className={styles.row}>{createColumns()}</div>;
};
