import { Item } from "@/models/items";
import Items from "../containers/Items/items";
import styles from "../styles/global.module.css";

const fetchProducts = async () => {
  const data = await fetch(
    "https://store.xsolla.com/api/v2/project/36867/items/game?locale=en"
  );

  const res = await data.json();
  const items: { items: Item[] } = res;
  

  return items;
};


export default async function Home() {

  const { items } = await fetchProducts();
  const itemPerPage = 16;

  return (
    <main className={styles.main_container}>
      {/* @ts-expect-error Server Component */}
      <Items items={items} itemPerPage={itemPerPage}/>
    </main>
  );
}
