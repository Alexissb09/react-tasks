import { useState, useContext } from "react";
import { TaskContext } from "../context/Taskcontext";

function Taskform() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handlerSubmit} className="bg-slate-800 mb-4 p-10">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingresa tu tarea"
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 placeholder:font-semibold rounded-md"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ingresa descripcion"
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 placeholder:font-semibold rounded-md"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-full">Guardar</button>
      </form>
    </div>
  );
}

export default Taskform;
