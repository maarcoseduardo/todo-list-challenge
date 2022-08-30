import React, { createContext, useState, useContext, ReactNode } from "react";

interface ModalProviderProps {
  children: ReactNode;
}
interface ContextValues {
  openModalNewTodo: boolean;
  setOpenModalNewTodo: React.Dispatch<React.SetStateAction<boolean>>;
  hanleOpenModalNewTodo: React.Dispatch<React.SetStateAction<any>>;
  hanleCloseModalNewTodo: React.Dispatch<React.SetStateAction<any | any>>;
}

const defaultValues: ContextValues = {
  openModalNewTodo: false,
  setOpenModalNewTodo: () => false,
  hanleOpenModalNewTodo: () => true,
  hanleCloseModalNewTodo: () => false
};

const ModalContext = createContext(defaultValues);

export function ModalContextProvider({ children }: ModalProviderProps) {
  const [openModalNewTodo, setOpenModalNewTodo] = useState(false);

  function hanleOpenModalNewTodo() {
    setOpenModalNewTodo(true)
  }

  function hanleCloseModalNewTodo() {
    setOpenModalNewTodo(false)
  }
  return (
    <ModalContext.Provider
      value={{
        openModalNewTodo,
        setOpenModalNewTodo,
        hanleOpenModalNewTodo,
        hanleCloseModalNewTodo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  const { openModalNewTodo, setOpenModalNewTodo, hanleOpenModalNewTodo, hanleCloseModalNewTodo } = context;

  return { openModalNewTodo, setOpenModalNewTodo, hanleOpenModalNewTodo, hanleCloseModalNewTodo };
}
