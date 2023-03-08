import { Link } from "react-router-dom"
import styles from "./CountryCard.module.scss"

interface CountryCardProps {
  flag: string
  name: string
  population: number
  region: string
  capital: string
  darkMode: boolean
}

export function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
  darkMode,
}: CountryCardProps) {
  return (
    <Link
      to={`country/${name}`}
      className={darkMode ? `${styles.card} ${styles.darkMode}` : styles.card}
    >
      <img src={flag} alt="flagImg" className={styles.flag} />

      <div
        className={darkMode ? `${styles.name} ${styles.darkMode}` : styles.name}
      >
        {name}
      </div>

      <div
        className={
          darkMode
            ? `${styles.population} ${styles.darkMode}`
            : styles.population
        }
      >
        Population:&nbsp;
        <span className={styles.data}>{population.toLocaleString()}</span>
      </div>

      <div
        className={
          darkMode ? `${styles.region} ${styles.darkMode}` : styles.region
        }
      >
        Region:&nbsp;
        <span
          className={
            darkMode ? `${styles.data} ${styles.darkMode}` : styles.data
          }
        >
          {region}
        </span>
      </div>

      <div
        className={
          darkMode ? `${styles.region} ${styles.darkMode}` : styles.region
        }
      >
        Capital:&nbsp;
        <span className={styles.data}>{capital}</span>
      </div>
    </Link>
  )
}
