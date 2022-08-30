import React, { createContext, useState, useContext, ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface UsersListResponse {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface ContextValues {
  userList: UsersListResponse[],
  setUserList: React.Dispatch<React.SetStateAction<UsersListResponse[]>>
}

const defaultValues: ContextValues = {
  userList: [],
  setUserList: () => []
}

const UserContext = createContext(defaultValues);

export function UsersContextProvider({ children }: UserProviderProps) {
  const [userList, setUserList] = useState<UsersListResponse[]>([]);

  return (
    <UserContext.Provider
      value={{
        userList,
        setUserList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);

  const { userList, setUserList } = context;

  return { userList, setUserList };
}