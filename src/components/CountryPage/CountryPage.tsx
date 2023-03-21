import styles from "./CountryPage.module.scss"

import { IoArrowBack } from "react-icons/io5"

import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Country } from "./Country"
import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"
import { useCountry } from "src/hooks/useCountry"

export function CountryPage() {
  const { darkMode } = useContext(DarkmodeAndRegionContext)
  const { countryName }: any = useParams()
  const { country } = useCountry(countryName)
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

      {!country ? (
        <div
          className={
            darkMode
              ? `${styles.containerNF} ${styles.darkMode}`
              : styles.containerNF
          }
        >
          Loading...
        </div>
      ) : (
        <Country country={country} />
      )}
    </>
  )
}
