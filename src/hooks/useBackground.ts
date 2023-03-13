import { useEffect } from "react"

export function useBackground(darkMode: boolean) {
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#202c37"
    } else {
      document.body.style.backgroundColor = "#fafafa"
    }
  }, [darkMode])
}
