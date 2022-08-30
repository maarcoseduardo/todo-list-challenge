import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { UserListRender } from "../components/UserListRender";
import { useUsers } from "../context/UsersContextProvider";
import { api } from "../services/api";

interface UsersListResponse {
  id: number;
  name: string;
  username: string;
  email: string;
}

type ListProps = {
  userListData: UsersListResponse[];
};

export default function Home({ userListData }: ListProps) {
  const { setUserList } = useUsers();

  useEffect(() => {
    setUserList(userListData);
  }, []);

  return (
    <>
      <Head>
        <title>To Do List - Challenge</title>
      </Head>
      <Header />
      <UserListRender />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("users");
  const userListData: UsersListResponse = await response.data;

  return {
    props: {
      userListData,
    },
    revalidate: 60 * 60 * 24, // one day
  };
};
