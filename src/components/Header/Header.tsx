import styles from "./Header.module.scss"

import { Link } from "react-router-dom"
import { IoSunny, IoMoonOutline, IoMoon } from "react-icons/io5"
import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"
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

        {/* <div
          className={
            darkMode ? `${styles.text} ${styles.darkModeHover}` : styles.text
          }
        > */}
        <div className={styles.toggle}>
          <input type="checkbox" id="check" onClick={darkmodeToggle} checked={darkMode} />
          <label htmlFor="check" className={styles.button}>
            <IoSunny className={styles.sun} />
            <IoMoon
              className={
                darkMode ? `${styles.moon} ${styles.darkModeImg}` : styles.moon
              }
            />
          </label>
        </div>
        {/* </div> */}
        {/* {darkMode ? (
            <IoSunny className={`${styles.img} ${styles.darkModeHover}`} />
          ) : (
            <IoMoonOutline className={styles.img} />
          )}
          {darkMode ? "Light" : "Dark"} Mode */}
      </div>
    </header>
  )
}
