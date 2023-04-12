import Link from "next/link";
import styles from "../../styles/nav.module.css";

function Nav() {
  return (
    <div className={styles.nav_container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_brand}>
            <a href="#" className={styles.navbar_logo}></a>
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
                <a href="#" className={styles.navbar_link}>
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
