import styles from "./Countries.module.scss"

import { useContext, useEffect, useState } from "react"

import { useCountries } from "src/hooks/useCountries"
import { usePagination } from "src/hooks/usePagination"
import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"
import { CountryType } from "src/interfaces"

import { Input } from "src/components/Input/Input"
import { CountryCard } from "src/components/CountryCard/CountryCard"
import { Pagination } from "src/components/Pagination/Pagination"

export function Countries() {
  const { region } = useContext(DarkmodeAndRegionContext)
  const [query, setQuery] = useState("")
  const { countries } = useCountries(query, region)
  const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(20)
  // const { currentPage, setCurrentPage, paginatedCountries } =
  //   usePagination(countries)

      const lastIndex = currentPage * countriesPerPage
      const firstIndex = lastIndex - countriesPerPage

      const paginatedCountries = countries.slice(firstIndex, lastIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [query])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [region])

  return (
    <div className={styles.countries}>
      <Input query={query} setQuery={setQuery} countries={countries} />

      <div className={styles.cards}>
        {paginatedCountries.map((country: any, i: number) => (
          <CountryCard
            key={i}
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>

      <Pagination
        countries={countries}
        query={query}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countriesPerPage={countriesPerPage}
        paginatedCountries={paginatedCountries}
      />
    </div>
  )
}
