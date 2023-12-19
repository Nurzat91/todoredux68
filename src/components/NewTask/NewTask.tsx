import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Task} from "../../types";
import {addTask} from "../../containers/ToDoApp/toDoAppThunks";

const NewTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === '') return;

    const newTask: Task = {
      id: Math.ceil(Math.random()),
      title,
      status: false,
    };

    dispatch(addTask(newTask));
    setTitle('');
  };

  return (
    <>
      <h4>New Task</h4>
      <form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <div className="form-group w-75">
          <input
            type="text"
            name="title"
            id="task"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary ms-4">
          Save
        </button>
      </form>
    </>
  );
};

export default NewTask;