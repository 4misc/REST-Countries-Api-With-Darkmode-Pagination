import ReactDOM from "react-dom/client"

import { App } from "./App"
import { DarkmodeAndRegionState } from "./context/DarkmodeAndRegion"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DarkmodeAndRegionState>
    <App />
  </DarkmodeAndRegionState>
)
