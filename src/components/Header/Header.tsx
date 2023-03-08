import styles from "./Header.module.scss"

import { Link } from "react-router-dom"
import { IoSunny, IoMoonOutline } from "react-icons/io5"
import { DarkmodeAndRegionContext } from "../../context/DarkmodeAndRegion"
import { useContext } from "react"

export function Header() {
  const { darkMode, darkmodeToggle } = useContext(DarkmodeAndRegionContext)
  return (
    <header
      className={
        darkMode ? `${styles.header} ${styles.darkMode}` : styles.header
      }
    >
      <div className={styles.container}>
        <Link
          to="/"
          className={
            darkMode ? `${styles.title} ${styles.darkMode}` : styles.title
          }
        >
          Where in the world?
        </Link>

        {/* <Link
          to="/pagination"
          className={
            darkMode
              ? `${styles.pagination} ${styles.darkModeHover}`
              : styles.pagination
          }
        >
          Pagination
        </Link> */}

        <div
          className={
            darkMode ? `${styles.text} ${styles.darkModeHover}` : styles.text
          }
          onClick={darkmodeToggle}
        >
          {darkMode ? (
            <IoSunny className={`${styles.img} ${styles.darkModeHover}`} />
          ) : (
            <IoMoonOutline className={styles.img} />
          )}
          {darkMode ? "Light" : "Dark"} Mode
        </div>
      </div>
    </header>
  )
}
