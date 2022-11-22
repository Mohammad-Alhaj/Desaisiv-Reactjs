import "./Employees.css";
import { useEffect, useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(data);
  const [search, setSearch] = useState("");

  const isLoginStorage = localStorage.getItem("isLogin");
  useEffect(() => {
    if (!isLoginStorage) {
      navigate("/");
    }
  }, [isLoginStorage, navigate]);

  // Handle Search
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Delete Employee
  const handleDelete = (id) => {
    const newItem = employees.filter((ele) => ele.id !== id);
    setEmployees(newItem);
  };

  // Update Edit
  const handleEdit = (id, first, last) => {
    const newItem = employees.map((employee, idx) => {
      if (employee.id === id) {
        employees[idx].first = first;
        employees[idx].last = last;
      }
      return employee;
    });
    setEmployees(newItem);
  };

  return (
    <div className="table-container">
      <h1>Employees Table</h1>
      <div className="main-table">
        <div className="search-section">
          <input
            className="search"
            onChange={handleSearch}
            type="search "
            placeholder="Search By first Name"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          {employees
            .filter((elem) => elem.first.toLowerCase().includes(search))
            .map((ele) => (
              <tbody key={ele.id}>
                <tr>
                  <td data-title="Provider Name">{ele.first}</td>
                  <td data-title="E-mail">{ele.last}</td>
                  <td className="select">
                    <DeleteModal handleDelete={handleDelete} id={ele.id} />
                    <EditModal
                      handleEdit={handleEdit}
                      id={ele.id}
                      firstName_={ele.first}
                      lastName_={ele.last}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}
