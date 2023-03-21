import ky from "ky"
import { useEffect, useState } from "react"

import { CountryType } from "../interfaces"

export function useCountry(countryName: string) {
  const [country, setCountry] = useState<CountryType>()

  const getCountry = async (countryName: string) => {
    try {
      const data: CountryType[] = await ky(
        `https://restcountries.com/v2/name/${countryName}`
      ).json()
      setCountry(data[0])
    } catch (error: any) {
      console.log(error.messaged)
    }
  }

  useEffect(() => {
    getCountry(countryName)
  }, [countryName])

  return { country }
}
