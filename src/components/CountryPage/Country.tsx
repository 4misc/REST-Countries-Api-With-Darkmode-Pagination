import styles from "./CountryPage.module.scss";

import { useContext } from "react";
import { Link, useAsyncValue } from "react-router-dom";
import { useBorder } from "../../hooks/useBorder";
import { DarkmodeAndRegionContext } from "../../context/DarkmodeAndRegion";

export function Country() {
  const country = useAsyncValue();
  const { darkMode } = useContext(DarkmodeAndRegionContext);

  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  }: any = country;

  const { border } = useBorder(borders);

  return (
    <div>
      <div className={styles.country}>
        <div className={styles.container}>
          {flags && (
            <img src={flags.svg} alt="flagImg" className={styles.flag} />
          )}

          <div
            className={
              darkMode
                ? `${styles.containerInfo} ${styles.darkMode}`
                : styles.containerInfo
            }
          >
            <div className={styles.containerInfo__name}>{name}</div>

            <div className={styles.infoContainer}>
              <div>
                <p className={styles.infoContainer__title}>
                  Native Name:&nbsp;
                  <span className={styles.infoContainer__data}>
                    {nativeName}
                  </span>
                </p>
                <p className={styles.infoContainer__title}>
                  Population:&nbsp;
                  {population && (
                    <span className={styles.infoContainer__data}>
                      {population.toLocaleString()}
                    </span>
                  )}
                </p>

                <p className={styles.infoContainer__title}>
                  Region:&nbsp;
                  <span className={styles.infoContainer__data}>{region}</span>
                </p>
                <p className={styles.infoContainer__title}>
                  Sub Region:&nbsp;
                  <span className={styles.infoContainer__data}>
                    {subregion}
                  </span>
                </p>
                <p className={styles.infoContainer__title}>
                  Capital:&nbsp;
                  <span className={styles.infoContainer__data}>{capital}</span>
                </p>
              </div>

              <div>
                <p className={styles.infoContainer__title}>
                  Top Level Domain:&nbsp;
                  <span className={styles.infoContainer__data}>
                    {topLevelDomain}
                  </span>
                </p>

                <p className={styles.infoContainer__title}>
                  Currencies:&nbsp;
                  {currencies.map((c: any, i: number) => (
                    <span className={styles.infoContainer__data} key={i}>
                      {c.name}&nbsp;
                    </span>
                  ))}
                </p>

                <p className={styles.infoContainer__title}>
                  Languages:&nbsp;
                  {languages.map((l: any, i: number) => (
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
                      to={`/country/${b}`}
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
    </div>
  );
}
