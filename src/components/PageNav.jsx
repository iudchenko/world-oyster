import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { useDark } from "../contexts/DarkModeContext";

function PageNav() {
  const { darkMode, toggleDarkMode } = useDark();

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
        <li>
          <DarkModeToggle enabled={darkMode} onToggle={toggleDarkMode} />
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
