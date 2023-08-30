import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      {/* <img src="/logo.png" alt="World Oyster logo" className={styles.logo} /> */}
      🌍 World Oyster
    </Link>
  );
}

export default Logo;
