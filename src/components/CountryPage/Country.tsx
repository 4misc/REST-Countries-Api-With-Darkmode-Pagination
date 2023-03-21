import styles from "./CountryPage.module.scss";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { useBorder } from "src/hooks/useBorder"
import { DarkmodeAndRegionContext } from "src/context/DarkmodeAndRegion"
import { CountryType } from "src/interfaces";

interface CountryProps {
  country: CountryType
}

export function Country({ country }: CountryProps) {
  const { darkMode } = useContext(DarkmodeAndRegionContext)
  const { border } = useBorder(country.borders)

  return (
    <div>
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
        <div className={styles.country}>
          <div className={styles.container}>
            {
              <img
                src={country.flags.svg}
                alt="flagImg"
                className={styles.flag}
              />
            }

            <div
              className={
                darkMode
                  ? `${styles.containerInfo} ${styles.darkMode}`
                  : styles.containerInfo
              }
            >
              <div className={styles.containerInfo__name}>{country.name}</div>

              <div className={styles.infoContainer}>
                <div>
                  <p className={styles.infoContainer__title}>
                    Native Name:&nbsp;
                    <span className={styles.infoContainer__data}>
                      {country.nativeName}
                    </span>
                  </p>
                  <p className={styles.infoContainer__title}>
                    Population:&nbsp;
                    {country.population && (
                      <span className={styles.infoContainer__data}>
                        {country.population.toLocaleString()}
                      </span>
                    )}
                  </p>

                  <p className={styles.infoContainer__title}>
                    Region:&nbsp;
                    <span className={styles.infoContainer__data}>
                      {country.region}
                    </span>
                  </p>
                  <p className={styles.infoContainer__title}>
                    Sub Region:&nbsp;
                    <span className={styles.infoContainer__data}>
                      {country.subregion}
                    </span>
                  </p>
                  <p className={styles.infoContainer__title}>
                    Capital:&nbsp;
                    <span className={styles.infoContainer__data}>
                      {country.capital}
                    </span>
                  </p>
                </div>

                <div>
                  <p className={styles.infoContainer__title}>
                    Top Level Domain:&nbsp;
                    <span className={styles.infoContainer__data}>
                      {country.topLevelDomain}
                    </span>
                  </p>

                  <p className={styles.infoContainer__title}>
                    Currencies:&nbsp;
                    {country.currencies.map((c: any, i: number) => (
                      <span className={styles.infoContainer__data} key={i}>
                        {c.name}&nbsp;
                      </span>
                    ))}
                  </p>

                  <p className={styles.infoContainer__title}>
                    Languages:&nbsp;
                    {country.languages.map((l: any, i: number) => (
                      <span className={styles.infoContainer__data} key={i}>
                        {l.name}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div
                className={`${styles.infoContainer__title} ${styles.infoContainer__border}`}
              >
                {border.length > 0 ? (
                  <p>
                    Border Countries:&nbsp;&nbsp;
                    {border.map((b: string, i: number) => (
                      <Link
                        to={`/${b}`}
                        key={i}
                        className={
                          darkMode
                            ? `${styles.btnBorder} ${styles.darkMode__btn}`
                            : styles.btnBorder
                        }
                      >
                        {b}&nbsp;
                      </Link>
                    ))}
                  </p>
                ) : (
                  <p>No Border Countries</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
