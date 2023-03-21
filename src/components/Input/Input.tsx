import styles from "./Input.module.scss"

import { useContext } from "react"

import { IoSearchOutline, IoCloseOutline } from "react-icons/io5"

import { CountryType } from "src/interfaces"

import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"

interface InputProps {
  query: string
  setQuery: (e: string) => void
  countries: CountryType[]
}

export function Input({ query, setQuery, countries }: InputProps) {
  const { darkMode, region, regionHandle } = useContext(
    DarkmodeAndRegionContext
  )
  return (
    <div className={styles.input}>
      <div
        className={
          darkMode
            ? `${styles.searchContainer} ${styles.darkMode}`
            : styles.searchContainer
        }
      >
        <input
          className={
            darkMode
              ? `${styles.searchContainer__search} ${styles.darkMode}`
              : styles.searchContainer__search
          }
          placeholder="Search for a country"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <IoSearchOutline className={styles.searchContainer__img} />

        {query && (
          <IoCloseOutline
            onClick={() => setQuery("")}
            className={styles.searchContainer__cross}
          />
        )}
      </div>

      <div
        className={
          darkMode
            ? `${styles.selectContainer} ${styles.darkMode__select}`
            : styles.selectContainer
        }
      >
        <p className={styles.count}>{countries.length}</p>

        <select
          value={region}
          className={
            darkMode
              ? `${styles.select} ${styles.darkMode__select}`
              : styles.select
          }
          onChange={(e) => regionHandle(e.target.value)}
        >
          <option value="" hidden>
            Filter by Region
          </option>

          <option
            className={
              darkMode
                ? `${styles.selectValue} ${styles.darkMode__select}`
                : styles.selectValue
            }
            value=""
          >
            All Countries
          </option>

          <option
            className={
              darkMode
                ? `${styles.selectValue} ${styles.darkMode__select}`
                : styles.selectValue
            }
            value="Asia"
          >
            Asia
          </option>

          <option
            className={
              darkMode
                ? `${styles.selectValue} ${styles.darkMode__select}`
                : styles.selectValue
            }
            value="Africa"
          >
            Africa
          </option>

          <option
            className={
              darkMode
                ? `${styles.selectValue} ${styles.darkMode__select}`
                : styles.selectValue
            }
            value="Americas"
          >
            Americas
          </option>

          <option
            className={
              darkMode
                ? `${styles.selectValue} ${styles.darkMode__select}`
                : styles.selectValue
            }
            value="Antarctic"
          >
            Antarctic
          </option>

          <option
            className={
              darkMode
                ? `${styles.selectValue} ${styles.darkMode__select}`
                : styles.selectValue
            }
            value="Europe"
          >
            Europe
          </option>

          <option
            className={
              darkMode
                ? `${styles.selectValue} ${styles.darkMode__select}`
                : styles.selectValue
            }
            value="Oceania"
          >
            Oceania
          </option>
        </select>
      </div>
    </div>
  )
}
