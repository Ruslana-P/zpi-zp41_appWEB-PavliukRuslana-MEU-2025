import { createContext, useContext } from "react";

export const ScreenSizeContext = createContext();

export const useScreenSize = () => useContext(ScreenSizeContext);
