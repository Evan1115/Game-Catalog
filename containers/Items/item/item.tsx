import React from "react";
import Image from "next/image";
import styles1 from "../../../styles/item.module.css";
import styles2 from "../../../styles/button.module.css";

type ItemDetail = {
  id: number;
  name: string;
  price: number;
  image_URL: string;
};

export default function Item({ name, price, image_URL }: ItemDetail) {
  return (
    <div className={styles1.grid_item}>
      <div className={styles1.image_wrap}>
        <Image
          className={styles1.image}
          src={image_URL}
          alt={name}
          width={500}
          height={500}
        />
      </div>
      <h2>{name}</h2>
      <div className={styles2.btn_wrap}>
        <div className={styles2.btn}>
          <span className={styles2.price}>$ {price}</span>
          <span className={styles2.buy_now}>Buy now</span>
          <span className={styles2.bg}></span>
        </div>
        <div className={styles2.circle_btn}>
          <svg className={styles2.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="3"><path stroke-linejoin="round" d="M9.903 1l9 9-9 9"></path><path d="M.903 10.109L18.793 10"></path></g></svg>
        </div>
      </div>
    </div>
  );
}
