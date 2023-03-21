import { useState } from "react"

import { CountryType } from "../interfaces"

export function usePagination(countries: CountryType[]) {
  // const [countriesPerPage] = useState(20)
  // const [currentPage, setCurrentPage] = useState(1)


  // const pageNumbers: number[] = []

  // for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
  //   pageNumbers.push(i)
  // }

  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // const goBack = () =>
  //   setCurrentPage((prev: number) => (prev - 1 < 1 ? prev : prev - 1))

  // const goForward = () =>
  //   setCurrentPage((prev: number) =>
  //   prev + 1 > pageNumbers.length ? prev : prev + 1
  //   )


  return {
    // pageNumbers,
    // currentPage,
    // setCurrentPage,
    // paginatedCountries,
    // paginate,
    // goBack,
    // goForward,
  }
}
