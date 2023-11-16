"use client";
import { CategoriesEnum } from "@/components/Categories/categories.enum";
import React, {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface GlobalContextProps {
  categorySelected: string;
  setCategorySelected: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [categorySelected, setCategorySelected] = useState<string>(
    CategoriesEnum.ANGULAR,
  );

  return (
    <GlobalContext.Provider
      value={{
        categorySelected,
        setCategorySelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a provider");
  }

  return context;
};
