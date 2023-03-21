export interface CountryType {
  darkMode: boolean
  name: string
  nativeName: string
  capital: string
  flags: { svg: any }
  region: string
  subregion: string
  population: number
  topLevelDomain: string
  currencies: string[]
  languages: string[]
  borders: string[]
}
