import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          The world is your oyster.
          <br />
          Keep track of your adventures.
        </h1>
        <h2>
          An interactive world map that records your travels to countless
          cities, helping you cherish your incredible adventures and share the
          scope of your global exploration with friends and fellow travelers.
        </h2>

        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
