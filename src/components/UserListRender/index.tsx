import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { useUsers } from "../../context/UsersContextProvider";

export function UserListRender() {
  const { userList } = useUsers();

  return (
    <div className="max-w-screen-sm mx-auto">
      <div className="text-center p-4">
        <h1 className="font-bold text-2xl text-violet-dark-800">Select User</h1>
      </div>
      <ul className="flex flex-col px-6 py-8 ">
        {userList.map((list) => (
          <Link href={`userPosts/${list.id}/${list.name}`} key={list.id}>
            <a>
              <li className="w-full h-20 my-2 border border-violet-light-500 rounded-md bg-green-light-500 bg-gradient-to-r from-gray-light-200 text-violet-light-500 hover:brightness-90 transition-colors">
                <div className="flex justify-between items-center h-20 p-4 text-center font-bold">
                  <span>{list.name}</span>
                  <span>
                    <ArrowRight size={32} />
                  </span>
                </div>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}
