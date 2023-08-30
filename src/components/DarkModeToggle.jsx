import styles from "./DarkModeToggle.module.css";

function DarkModeToggle({ enabled, onToggle }) {
  return (
    <button className={styles.btnDark} onClick={onToggle}>
      {enabled ? "☾" : "☼"}
    </button>
  );
}

export default DarkModeToggle;
