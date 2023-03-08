import { useContext, useEffect } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { Layout } from "./Layout"

import { Countries } from "./components/Countries/Countries"
import {
  CountryPage,
  countryPageLoader,
} from "./components/CountryPage/CountryPage"
import { NotFound } from "./components/NotFound/NotFound"

import { DarkmodeAndRegionContext } from "./context/DarkmodeAndRegion"

export function App() {
  const { darkMode, darkmodeHandle, region, regionHandle } = useContext(
    DarkmodeAndRegionContext
  )

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

  if (darkMode) {
    document.body.style.backgroundColor = "#202c37"
  } else {
    document.body.style.backgroundColor = "#fafafa"
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Countries />} />

        <Route
          path="country/:countryName"
          element={<CountryPage />}
          loader={countryPageLoader}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} fallbackElement={<NotFound />} />
}
