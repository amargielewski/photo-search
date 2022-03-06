import { useContext } from "react";

//context
import { LayoutContext } from "Providers";

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw Error(
      "useLayoutContext must be used inside an LayoutContextProvider"
    );
  }

  return context;
};
