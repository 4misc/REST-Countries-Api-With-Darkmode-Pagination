import ky from "ky"
import { useEffect, useState } from "react"

import { CountryType } from "../interfaces"

export function useCountries(query: string, region: string) {
  const [countries, setCountries] = useState<CountryType[]>([])

  const getAll = async () => {
    try {
      const data: CountryType[] = await ky(
        "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
      ).json()

      setCountries(
        data
          .sort((a: CountryType, b: CountryType) =>
            a.name.common > b.name.common ? 1 : -1
          )
          .filter((country: CountryType) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
          )
          .filter((country: CountryType) => country.region.includes(region))
      )
    } catch (error: any) {
      console.log(error.messaged)
    }
  }

  useEffect(() => {
    getAll()
  }, [query, region])

  return { countries }
}
