import { createContext } from "react"

const Context = createContext({
  darkMode: true,
  setDarkMode: () => {},
})

export default Context
