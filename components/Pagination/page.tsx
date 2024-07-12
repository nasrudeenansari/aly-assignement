"use client";
import React, { MouseEvent } from "react";
import styles from "../../app/styles/pagination.module.css";
import { NextIcon, PrevIcon } from "@/public/icons";

const Pagination: React.FC<{ totalPages: number; page: number }> = ({
  totalPages,
  page,
}) => {
  const updatePage = (
    newPage: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (isNaN(newPage) || newPage < 1 || newPage > totalPages) return;

    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());

    window.location.replace(url.toString());
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPage = parseInt(formData.get("page") as string);

    if (isNaN(newPage) || newPage < 1 || newPage > totalPages) return;

    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());

    window.location.replace(url.toString());
  };

  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.pagination_section}>
        <div className={styles.pagination_title}>
          Page {page} of {totalPages}
        </div>
        <div className={styles.navigation_btns}>
          <a
            href="/#"
            onClick={(e) => updatePage(page - 1, e)}
            className={styles.prev_icon}
            data-testid="previous"
            aria-label="previous page"
          >
            <PrevIcon fill={page > 1 ? "currentColor" : "rgb(197 197 197)"} />
          </a>
          <a
            href="#"
            className={styles.next_icon}
            onClick={(e) => updatePage(page + 1, e)}
            data-testid="next"
            aria-label="next page"
          >
            <NextIcon
              fill={page < totalPages ? "currentColor" : "rgb(197 197 197)"}
            />
          </a>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.go_page_section}>
          <label>Go to page</label>
          <input
            name="page"
            data-testid="page"
            id="page"
            type="text"
            aria-label="go to page"
            autoComplete="off"
          />
          <button type="submit" className={styles.go_btn}>
            Go
          </button>
        </div>
      </form>
    </div>
  );
};
export default Pagination;
