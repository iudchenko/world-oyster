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
          A global map that traces your journey to countless cities. Always
          remember your amazing adventures and display to your companions the
          extent of your global exploration.
        </h2>
        <Link to="/app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
