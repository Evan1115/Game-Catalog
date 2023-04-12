import React from "react";
import styles from "../../styles/page-number.module.css";

type Props = {
  currPage: number;
  selectedPage: number;
  changePage: (page: number) => void;
};

function PageNumber({ currPage, selectedPage, changePage }: Props) {
  console.log("inside", selectedPage);

  return (
    <div
      className={
        `${styles.button} ${currPage === selectedPage ? styles.button_active : ""}`
      }
      key={selectedPage}
      onClick={() => changePage(selectedPage)}
    >
      <div>{selectedPage}</div>
    </div>
  );
}

export default PageNumber;
