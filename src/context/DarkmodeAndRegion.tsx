import { createContext, useState } from "react"

interface DarkmodeAndRegionContextProps {
  darkMode: boolean
  darkmodeToggle: () => void
  darkmodeHandle: (e: any) => void
  region: string
  regionHandle: (e: string) => void
}

export const DarkmodeAndRegionContext =
  createContext<DarkmodeAndRegionContextProps>({
    darkMode: false,
    darkmodeToggle: () => {},
    darkmodeHandle: (e: boolean | ((prevState: boolean) => boolean)) => {
      e
    },
    region: "",
    regionHandle: (e: string) => {},
  })

export const DarkmodeAndRegionState = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [darkMode, setDarkmode] = useState(false)
  const [region, setRegion] = useState("")

  const darkmodeToggle = () => setDarkmode((prev) => !prev)
  const darkmodeHandle = (e: boolean | ((prevState: boolean) => boolean)) =>
    setDarkmode(e)
  const regionHandle = (e: string) => setRegion(e)

  return (
    <DarkmodeAndRegionContext.Provider
      value={{ darkMode, darkmodeToggle, darkmodeHandle, region, regionHandle }}
    >
      {children}
    </DarkmodeAndRegionContext.Provider>
  )
}
