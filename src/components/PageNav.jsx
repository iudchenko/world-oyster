import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import Button from "../components/Button";
import DarkModeToggle from "./DarkModeToggle";
import { useDark } from "../contexts/DarkModeContext";
import { useAuth } from "../contexts/AuthContext";
import { useCities } from "../contexts/CitiesContext";

function PageNav() {
  const { darkMode, toggleDarkMode } = useDark();
  const { isAuthenticated, signOut } = useAuth();
  const { resetCities } = useCities();

  function handleLogout() {
    resetCities();
    signOut();
  }

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
          {isAuthenticated ? (
            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          )}
        </li>
        <li>
          <DarkModeToggle enabled={darkMode} onToggle={toggleDarkMode} />
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
