import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 768,
  tablet: 1024,
};

export const DEVICE = {
  MOBILE: "Mobile",
  TABLET: "Tablet",
  DESKTOP: "Desktop",
};

const getDeviceType = (width) => {
  if (width <= breakpoints.mobile) return DEVICE.MOBILE;
  if (width <= breakpoints.tablet) return DEVICE.TABLET;
  return DEVICE.DESKTOP;
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
