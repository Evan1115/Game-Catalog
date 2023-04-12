import Items from "../containers/Items/items";
import styles from "../styles/global.module.css";

export default function Home() {
  return (
    <main className={styles.main_container}>
      {/* @ts-expect-error Server Component */}
      <Items />
    </main>
  );
}
