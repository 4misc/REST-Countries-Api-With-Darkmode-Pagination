import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"
import styles from "./NotFound.module.scss";

export function NotFound() {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkmodeAndRegionContext);

  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={
        darkMode ? `${styles.container} ${styles.darkMode}` : styles.container
      }
    >
      Sorry, this page doesn't exist.
    </div>
  );
}
