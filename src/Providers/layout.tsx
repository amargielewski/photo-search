import { createContext, ReactChild, useState } from "react";

export type LayoutProps = {
  children: ReactChild[] | ReactChild;
};

type LayoutContextProps = {
  lockBodyScroll: boolean;
  toggleLockBodyScroll: () => void;
};

export const LayoutContext = createContext<LayoutContextProps | null>(null);
export const LayoutContextProvider = ({ children }: LayoutProps) => {
  const [lockBodyScroll, setlockBodyScroll] = useState(false);

  const toggleLockBodyScroll = () => setlockBodyScroll((prev) => !prev);

  return (
    <LayoutContext.Provider value={{ lockBodyScroll, toggleLockBodyScroll }}>
      {children}
    </LayoutContext.Provider>
  );
};
