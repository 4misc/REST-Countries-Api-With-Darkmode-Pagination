import styles from "./Pagination.module.scss"

import { useContext } from "react"

import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5"
import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"
import { CountryType } from "src/interfaces"

interface PaginationProps {
  pageNumbers: number[]
  paginate: (pageNumber: number) => void
  goBack: () => void
  goForward:() => void
  countries: CountryType[]
  paginatedCountries: CountryType[]
  query: string
  currentPage: number
}

export function Pagination({
  pageNumbers,
  paginate,
  goBack,
  goForward,
  countries,
  paginatedCountries,
  query,
  currentPage,
}: PaginationProps) {
  const { darkMode } = useContext(DarkmodeAndRegionContext)

  return (
    <div className={styles.numbersContainer}>
      {paginatedCountries.length > 0 && (
        <button
          className={
            darkMode ? `${styles.numbers} ${styles.darkMode}` : styles.numbers
          }
          onClick={goBack}
        >
          <IoArrowBack />
        </button>
      )}

      <div className={styles.pagination}>
        {darkMode
          ? pageNumbers.map((number: number, i: number) => (
              <div
                className={
                  number === currentPage
                    ? `${styles.numbers} ${styles.darkModeYes}`
                    : `${styles.numbers} ${styles.darkMode}`
                }
                key={i}
                onClick={() => paginate(number)}
              >
                {number}
              </div>
            ))
          : pageNumbers.map((number: number, i: number) => (
              <div
                className={
                  number === currentPage
                    ? `${styles.numbers} ${styles.darkModeNo}`
                    : `${styles.numbers} ${styles.darkModeNo2}`
                }
                key={i}
                onClick={() => paginate(number)}
              >
                {number}
              </div>
            ))}
      </div>

      {paginatedCountries.length > 0 && (
        <div className={`${styles.numbers} ${styles.paginationMobile}`}>
          {currentPage}
        </div>
      )}

      {paginatedCountries.length > 0 && (
        <button
          className={
            darkMode
              ? `${styles.numbers} ${styles.darkMode} ${styles.margin0}`
              : `${styles.numbers} ${styles.margin0}`
          }
          onClick={goForward}
        >
          <IoArrowForwardOutline />
        </button>
      )}

      {query && countries.length === 0 && (
        <div
          className={
            darkMode
              ? `${styles.noResult} ${styles.darkModeNoResult}`
              : styles.noResult
          }
        >
          Sorry, no results found.
        </div>
      )}
    </div>
  )
}
