import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { api } from "../../services/api";
import { useEffect } from "react";
import { TodosListRender } from "../../components/TodosListRender";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useTodos } from "../../context/TodosContextProvider";
import { ModalAddTodo } from "../../components/ModalAddTodo";
import Head from "next/head";

interface TodosListResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type TodoListProps = {
  todosListData: TodosListResponse[];
};

export default function Username({ todosListData }: TodoListProps) {
  const router = useRouter();
  const { setTodosList } = useTodos();

  const { usernameAndId } = router.query;

  const idUser = Number(usernameAndId?.slice(0, 1));
  const userName = String(usernameAndId?.slice(1, 2));

  const filteredTodos = todosListData.filter((todo) => todo.userId === idUser);

  useEffect(() => {
    setTodosList(filteredTodos);
  }, []);

  return (
    <>
      <Head>
        <title>To Do List - {userName}</title>
      </Head>
      <Header />
      <TodosListRender user={userName} />
      <Footer />
      <ModalAddTodo />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("todos");
  const todosListData: TodosListResponse = await response.data;

  return {
    props: {
      todosListData,
    },
  };
};
