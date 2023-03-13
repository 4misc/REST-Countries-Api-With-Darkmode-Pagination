import { useContext } from "react"
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
import { Tail } from "./components/Tail/Tail"
import { useStorage } from "./hooks/useStorage"
import { useBackground } from "./hooks/useBackground"

export function App() {
  const { darkMode, darkmodeHandle, region, regionHandle } = useContext(
    DarkmodeAndRegionContext
  )

  useStorage(darkMode, darkmodeHandle, region, regionHandle)

  useBackground(darkMode)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Countries />} />

        <Route
          path="country/:countryName"
          element={<CountryPage />}
          loader={countryPageLoader}
        />

        <Route path="tail" element={<Tail />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} fallbackElement={<NotFound />} />
}
