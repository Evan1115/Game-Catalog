import Link from "next/link";
import styles from "../../styles/nav.module.css";

function Nav() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.navbar_container}>
              <div className={styles.navbar_brand}>
                <Link href="#" className={styles.navbar_logo} />
              </div>
              <div className={styles.navbar_menu}>
                <ul className={styles.navbar_list}>
                  <li className={styles.avbar_item}>
                    <div className={styles.navbar_search}>
                      <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className={styles.search_input}
                      />
                    </div>
                  </li>
                  <li className={styles.navbar_item}>
                    <Link href="#" className={styles.navbar_link} />
                    Login/Register
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navbar2}>
        <div className={styles.container}>
          <div className={styles.navbar2__bar}>
            <ul>
              <li>
                <Link className={styles.navbar2__link} href="#">
                  TEAM17 HOME
                </Link>
              </li>
              <li>
                <span> &gt; </span>
              </li>
              <li>
                <Link href="#" className={styles.navbar2__link}>STORE</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
