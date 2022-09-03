import Modal from "react-modal";
import { useModal } from "../../context/ModalContext";
import { useTodos } from "../../context/TodosContextProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import {AiOutlineLoading} from "react-icons/ai";

interface InputsProps {
  userId: number,
  id: number,
  title: string;
  completed: boolean;
}

export function ModalAddTodo() {
  const { register, handleSubmit, formState, reset } = useForm<InputsProps>();

  const { openModalNewTodo, hanleCloseModalNewTodo } = useModal();
  const { todosList, setTodosList } = useTodos();

  let newTodo = {
    userId: 1,
    id: 1,
    title: '',
    completed: true
  }

  const SubmitHandleData: SubmitHandler<InputsProps> = async (inputs, event) => {
    const tempTodo = [...todosList]
    const selectedTodo = tempTodo.filter(todo => todo.id)

    newTodo = {
      userId: selectedTodo[0].userId,
      id: tempTodo.length + 1,
      title: inputs.title,
      completed: inputs.completed
    }
    await new Promise(resolve => setTimeout(resolve, 2000))
    setTodosList([...tempTodo, newTodo])
    hanleCloseModalNewTodo(true)
    reset()
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
        <form onSubmit={handleSubmit(SubmitHandleData)} className="flex flex-col justify-around h-60">
          <div className="w-full flex justify-between items-center">
            <label htmlFor="write-text-todo" className="text-violet-dark-800">Write your todo</label>
            <div className="flex justify-between items-center w-36">
              <p className="text-violet-dark-800">Completed todo</p>
              <input type="checkbox" className="w-5 h-5" defaultChecked {...register('completed')} />
            </div>
          </div>
          <textarea
            id="write-text-todo"
            placeholder="type your todo..."
            {...register('title')}
            className="w-full h-32 p-2 resize-none border rounded-md bg-pink-light-500 text-violet-light-500 placeholder:italic placeholder-gray-light-200" />
          {formState.isSubmitting ? (
           <button 
           type="submit" 
           disabled
           className="w-36 h-12 mx-auto flex justify-center items-center border rounded-sm bg-green-light-500 text-violet-light-500 font-bold cursor-not-allowed hover:brightness-90">
            <span className="animate-spin">
              <AiOutlineLoading size={25}/>
            </span>
           </button> 
          ) : (
            <button 
            type="submit" 
            className="w-36 h-12 mx-auto border rounded-sm bg-green-light-500 text-violet-light-500 font-bold hover:brightness-90">
              Insert Todo
            </button>
          )}
        </form>
      </div>
    </Modal>
  );
}
