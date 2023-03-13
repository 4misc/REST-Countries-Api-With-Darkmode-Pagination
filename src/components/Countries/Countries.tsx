import { useContext, useEffect, useState } from "react"
import { useCountries } from "../../hooks/useCountries"

import styles from "./Countries.module.scss"

import { CountryType } from "../../interfaces"

import { Input } from "../Input/Input"
import { CountryCard } from "../CountryCard/CountryCard"
import { DarkmodeAndRegionContext } from "../../context/DarkmodeAndRegion"
import { Pagination } from "../Pagination/Pagination"

export function Countries() {
  const { darkMode, region } = useContext(DarkmodeAndRegionContext)
  const [query, setQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(20)

  const { countries } = useCountries(query, region)

  const lastIndex = currentPage * countriesPerPage
  const firstIndex = lastIndex - countriesPerPage
  const paginatedCountries = countries.slice(firstIndex, lastIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [query])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  return (
    <div
      className={
        darkMode ? `${styles.countries} ${styles.darkMode}` : styles.countries
      }
    >
      <Input query={query} setQuery={setQuery} countries={countries} />

      <div
        className={
          darkMode ? `${styles.cards} ${styles.darkMode}` : styles.cards
        }
      >
        {paginatedCountries.map((country: CountryType, i: number) => (
          <CountryCard
            key={i}
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            darkMode={darkMode}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countries={countries}
        query={query}
        paginatedCountries={paginatedCountries}
        countriesPerPage={countriesPerPage}
      />
    </div>
  )
}
