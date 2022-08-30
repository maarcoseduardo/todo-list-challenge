import "../styles/global.css";
import type { AppProps } from "next/app";
import { TodosContextProvider } from "../context/TodosContextProvider";
import { UsersContextProvider } from "../context/UsersContextProvider";
import { ModalContextProvider } from "../context/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UsersContextProvider>
      <TodosContextProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </TodosContextProvider>
    </UsersContextProvider>
  );
}

export default MyApp;
