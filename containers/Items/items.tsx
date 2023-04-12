"use client";
import { Item } from "@/models/items";
import React from "react";
import ItemDetail from "./item/item";
import styles1 from "../../styles/item.module.css";
import PageNumber from "../../components/page-number/page-number";
import { useState } from "react";
import styles2 from "../../styles/page-number.module.css";

type Props = {
  items: Item[]
  itemPerPage: number
}

const Items = ({items, itemPerPage}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);



  const handlePageChange = (page: number) => { 
    console.log(page) 
    setCurrentPage(page)  
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  // Get the games that belong to the current page
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const visibleGames = items.slice(startIndex, endIndex);

  return (
    <div>
      <div className={styles1.grid_container}>
        {visibleGames.map((item: Item) => (
          <ItemDetail
            key={item.item_id}
            id={item.item_id}
            name={item.name}
            image_URL={item.image_url}
            price={item.unit_items[0].price.amount}
          />
        ))}
      </div>
      <div className={styles2.button_container}>
        {Array.from(
          { length: Math.ceil(items.length / itemPerPage) },
          (_, i) => i + 1
        ).map((page) => (
          <PageNumber currPage={currentPage} selectedPage={page} changePage={handlePageChange}/>
        ))}
      </div>
    </div>
  );
};

export default Items;
