const NewTask = () => {
  return (
    <>
      <h4>New Task</h4>
      <form className="d-flex align-items-center">
        <div className="form-group w-75">
          <input
            type="text"
            name="title"
            id="task"
            className="form-control"
          />
        </div>
        <div className="form-check mx-2">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="form-check-input"
            style={{width: '25px', height: '25px'}}
          />
        </div>
        <button type="submit" className="btn btn-primary ms-4">Save</button>
      </form>
    </>
  );
};

export default NewTask;