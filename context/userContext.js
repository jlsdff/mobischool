
import { createContext } from "react";

defaultValue = {
  user: null,
  setUser: () => {}
}

export const UserContext = createContext(defaultValue);