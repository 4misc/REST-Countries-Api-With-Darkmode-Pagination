import { useEffect } from "react"

export function useStorage(
  darkMode: boolean,
  darkmodeHandle: (storedBoolean: number) => void,
  region: string,
  regionHandle: (storedRegion: string) => void
) {
  useEffect(() => {
    const storedBoolean = localStorage.getItem("darkMode")
    const storedRegion = sessionStorage.getItem("region")

    if (storedBoolean !== null) {
      darkmodeHandle(JSON.parse(storedBoolean))
    }

    if (storedRegion !== null) {
      regionHandle(storedRegion)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    sessionStorage.setItem("region", region)
  }, [darkMode, region])
}
