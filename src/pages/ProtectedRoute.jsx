import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import PageNav from "../components/PageNav";
import styles from "./ProtectedRoute.module.css";
import Button from "../components/Button";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return isAuthenticated ? (
    children
  ) : (
    <main className={styles.protectedRoute}>
      <PageNav />
      <section>
        <h2>Please, log in to use the app</h2>
        <Button type="primary" onClick={() => navigate("/login")}>
          Log in
        </Button>
      </section>
    </main>
  );
}

export default ProtectedRoute;
