import {Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ToDoApp from "./containers/ToDoApp/ToDoApp";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ToDoApp/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

export default App
