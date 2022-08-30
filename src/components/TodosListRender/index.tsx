import { Trash } from 'phosphor-react';
import { useTodos } from '../../context/TodosContextProvider';
import { useModal } from '../../context/ModalContext';

type UserProp = {
  user: string
}

export function TodosListRender({ user }: UserProp) {
  const { todosList, setTodosList } = useTodos();
  const { hanleOpenModalNewTodo } = useModal();

  function handleChangeCompletedTodo(id: number, completed: boolean) {
    const tempTodo = [...todosList]
    const selectedTodo = tempTodo.filter((todo) => todo.id === id)

    selectedTodo[0].completed = completed

    setTodosList(tempTodo)
  }

  function handleRemoveTodoFromList(id: number) {
    const tempTodo = [...todosList]
    const selectedTodo = tempTodo.filter((todo) => todo.id !== id)

    setTodosList(selectedTodo)
  }

  return (
    <div className="flex flex-col justify-between items-center max-w-screen-2xl mx-auto px-6 py-8">
      <div className="my-4">
        <h1 className="text-3xl">Welcome <span className="font-bold text-violet-light-500">{user}</span>, bellow is your todo list.</h1>
      </div>
      <ul className=" gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {todosList?.map((todos) => (
          <li
            key={todos.id}
            className="flex flex-col justify-between w-full h-60 border border-violet-light-500 rounded-md bg-green-light-500 bg-gradient-to-r from-gray-light-200"
          >
            <div className="flex justify-end items-center gap-6 mr-1 p-4">
              <p className="text-violet-light-500 font-bold">
                {todos.completed ? 'Completed' : 'Not Completed'}
              </p>
              <input className="w-5 h-5" type="checkbox" defaultChecked={todos.completed} onChange={event => handleChangeCompletedTodo(todos.id, event.target.checked)} />
            </div>
            <p className="px-4 overflow-hidden text-violet-dark-800 font-bold">
              {todos.title}
            </p>
            <div className="flex justify-end  p-4">
              <button onClick={() => handleRemoveTodoFromList(todos.id)}><Trash size={25} color="red" weight="light" /></button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="w-36 h-12 mx-auto my-4 border rounded-sm bg-green-light-500 text-violet-light-500 font-bold hover:brightness-90"
        onClick={hanleOpenModalNewTodo}
      >
        Add new Todo
      </button>
    </div>
  );
}
