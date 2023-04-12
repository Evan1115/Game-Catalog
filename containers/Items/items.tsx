"use client";
import { Item } from "@/models/items";
import React from "react";
import ItemDetail from "./item/item";
import styles1 from "../../styles/item.module.css";
import PageNumber from "../../components/page-number/page-number";
import { useState } from "react";
import styles2 from "../../styles/page-number.module.css";
import { Console } from "console";

const fetchProducts = async () => {
  const data = await fetch(
    "https://store.xsolla.com/api/v2/project/36867/items/game?locale=en"
  );

  const res = await data.json();
  const items: { items: Item[] } = res;

  return items;
};

const Items = async () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { items } = await fetchProducts();
  const itemPerPage = 16;

  // Get the games that belong to the current page
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const visibleItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    console.log(page);
    setCurrentPage(page);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log(currentPage);

  return (
    <div>
      <div className={styles1.grid_container}>
        {visibleItems.map((item: Item) => (
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
          <PageNumber
            key={page}
            currPage={currentPage}
            selectedPage={page}
            changePage={handlePageChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
