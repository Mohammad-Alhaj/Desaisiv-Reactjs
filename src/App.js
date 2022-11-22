import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Employees from "./components/Employees/Employees";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
