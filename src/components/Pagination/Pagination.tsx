import styles from "./Pagination.module.scss"

import { useContext } from "react"

import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5"
import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"
import { usePagination } from "src/hooks/usePagination"

interface PaginationProps {
  countries: any
  query: string
}

export function Pagination({
  countries,
  query,
  currentPage,
  setCurrentPage,
  countriesPerPage,
  paginatedCountries,
}: any) {
  const { darkMode } = useContext(DarkmodeAndRegionContext)
  const {
    // paginate,
    // goBack,
    // goForward,
    // pageNumbers,
    // currentPage,
    // paginatedCountries,
  } = usePagination(countries)

  const pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const goBack = () =>
    setCurrentPage((prev: number) => (prev - 1 < 1 ? prev : prev - 1))

  const goForward = () =>
    setCurrentPage((prev: number) =>
      prev + 1 > pageNumbers.length ? prev : prev + 1
    )
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
