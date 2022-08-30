import React, { createContext, useState, useContext, ReactNode } from "react";

interface TodosProviderProps {
  children: ReactNode;
}

interface TodosListResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ContextValues {
  todosList: TodosListResponse[];
  setTodosList: React.Dispatch<React.SetStateAction<TodosListResponse[]>>;
}
const defaultValues: ContextValues = {
  todosList: [],
  setTodosList: () => [],
};

const TodosContext = createContext(defaultValues);

export function TodosContextProvider({ children }: TodosProviderProps) {
  const [todosList, setTodosList] = useState<TodosListResponse[]>([]);

  return (
    <TodosContext.Provider
      value={{
        todosList,
        setTodosList,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  const { todosList, setTodosList } = context;

  return { todosList, setTodosList };
}
