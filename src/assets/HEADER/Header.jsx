import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.Header}>
            <ul className={styles.navbar}>
                <li className={styles.navbarList} >HOME</li>
                <li className={styles.navbarList}>SIGNIN</li>
                <li className={styles.navbarList}>CART</li>
            </ul>
        </div>
    )
}

export default Header