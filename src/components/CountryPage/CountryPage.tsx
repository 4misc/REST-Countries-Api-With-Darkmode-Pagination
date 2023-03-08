import styles from "./CountryPage.module.scss"

import { IoArrowBack } from "react-icons/io5"

import ky from "ky"
import { Suspense, useContext } from "react"
import { useNavigate, useLoaderData, Await, defer } from "react-router-dom"

import { Country } from "./Country"
import { DarkmodeAndRegionContext } from "../../context/DarkmodeAndRegion"

export function CountryPage() {
  const { darkMode } = useContext(DarkmodeAndRegionContext)
  const { country }: any = useLoaderData()

  const navigate = useNavigate()

  return (
    <>
      <div className={styles.btnContainer}>
        <div
          onClick={() => navigate(-1)}
          className={
            darkMode ? `${styles.btn} ${styles.darkMode__btn}` : styles.btn
          }
        >
          Back
          <IoArrowBack
            className={
              darkMode ? `${styles.btnImg} ${styles.darkMode}` : styles.btnImg
            }
          />
        </div>
      </div>

      <Suspense
        fallback={
          <div
            className={
              darkMode
                ? `${styles.containerNF} ${styles.darkMode}`
                : styles.containerNF
            }
          >
            Loading...
          </div>
        }
      >
        <Await resolve={country}>
          <Country />
        </Await>
      </Suspense>
    </>
  )
}

async function getCountry(countryName: string) {
  const country: any = await ky(
    `https://restcountries.com/v2/name/${countryName}`
  ).json()

  return country[0]
}

export const countryPageLoader = async ({ params }: any) => {
  const countryName = params.countryName

  return defer({ country: getCountry(countryName) })
}
