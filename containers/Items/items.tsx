
import { Item } from "@/models/items";
import React from "react";
import ItemDetail from "./item/item";
import styles from "../../styles/item.module.css";


const fetchProducts = async () => {
  const data = await fetch(
    "https://store.xsolla.com/api/v2/project/36867/items/game?locale=en&limit=10"
  );

  const res = await data.json();
  const items: { items: Item[] } = res;

  return items;
};

export default async function Items() {
  const { items } = await fetchProducts();

  return (
    <div>
      <div className={styles.grid_container}>
        {items.map((item: Item) => (
          <ItemDetail
            key={item.item_id}
            id={item.item_id}
            name={item.name}
            image_URL={item.image_url}
            price={item.unit_items[0].price.amount}
          />
        ))}
      </div>

    </div>
  );
}
