import React from "react";
import Image from "next/image";
import styles1 from "../../styles/item.module.css";
import styles2 from "../../styles/button.module.css"

type ItemDetail = {
  id: number;
  name: string;
  price: number;
  image_URL: string;
};

export default function Item({ id, name, price, image_URL }: ItemDetail) {
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
          <i></i>
        </div>
      </div>
    </div>
  );
}
