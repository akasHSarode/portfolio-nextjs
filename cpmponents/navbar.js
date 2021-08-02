import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul id="navMenu" className="">
        <li className={styles['nav-link']}>
          <a 
            href="#about" 
            className={`${styles['nav-btn']} ${styles['active']}`}>
            About
          </a>
        </li>
        <li className={styles['nav-link']}>
          <a href="#work" className={styles['nav-btn']}>Work</a>
        </li>
        <li className={styles['nav-link']}>
          <a href="#contact" className={styles['nav-btn']}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}