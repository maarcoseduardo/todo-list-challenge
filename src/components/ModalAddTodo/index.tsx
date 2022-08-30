import { useState } from "react";
import Modal from "react-modal";
import { useModal } from "../../context/ModalContext";
import { useTodos } from "../../context/TodosContextProvider";

export function ModalAddTodo() {
  const { openModalNewTodo, setOpenModalNewTodo, hanleCloseModalNewTodo } = useModal();
  const { todosList, setTodosList } = useTodos();
  const [newTodoCompleted, setNewTodoCompleted] = useState(true);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  let newTodo = {
    userId: 1,
    id: 1,
    title: '',
    completed: true
  }

  function addTodo(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault()
  }

  function handleAddNewTodo(userIdData: number) {
    const tempTodo = [...todosList]
    newTodo = {
      userId: userIdData,
      id: tempTodo.length + 1,
      title: newTodoTitle,
      completed: newTodoCompleted
    }

    setOpenModalNewTodo(false)
    setTodosList([...todosList, newTodo])

  }

  return (
    <Modal
      isOpen={openModalNewTodo}
      onRequestClose={hanleCloseModalNewTodo}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        onClick={hanleCloseModalNewTodo}
        className="w-10 h-10 absolute -top-3 -right-3 bg-pink-light-500 rounded-full font-bold">X</button>
      <div className="flex flex-col justify-between text-center h-80">
        <h2 className="font-bold text-violet-dark-800">Add new Todo</h2>
        <form className="flex flex-col justify-around h-60">
          <div className="w-full flex justify-between items-center">
            <label htmlFor="write-text-todo" className="text-violet-dark-800">Write your todo</label>
            <div className="flex justify-between items-center w-36">
              <p className="text-violet-dark-800">Completed todo</p>
              <input type="checkbox" className="w-5 h-5" defaultChecked onChange={event => setNewTodoCompleted(event.target.checked)} />
            </div>
          </div>
          <textarea
            id="write-text-todo"
            placeholder="type your todo..."
            onChange={event => setNewTodoTitle(event.target.value)}
            className="w-full h-32 p-2 resize-none border rounded-md bg-pink-light-500 text-violet-light-500 placeholder:italic placeholder-gray-light-200"></textarea>
          <button onClick={() => handleAddNewTodo(newTodo.userId)} className="w-36 h-12 mx-auto border rounded-sm bg-green-light-500 text-violet-light-500 font-bold hover:brightness-90">Insert Todo</button>
        </form>
      </div>
    </Modal>
  );
}
