import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

export default function () {
  const initialEmployees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 102, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 104, name: "manoj", sal: 9000 },
  ];
  let initialEmp = { eId: "", name: "", sal: 0 };

  let [employee, setEmployee] = useState(initialEmployees);
  let [isEdit, setIsEdit] = useState(false);
  let [selectedEmployee, setSelectedEmployee] = useState(initialEmp);

  const handleDelete = (eId) => {
    let filteredEmp = employee.filter((emp) => emp.eId !== eId);
    setEmployee([...filteredEmp]);
  };
  const addEmployee = (userEmp) => {
    employee.push(userEmp);
    setEmployee([...employee]);
  };
  const editEmployee = (emp) => {
    setSelectedEmployee(emp);
    setIsEdit(true);
  };

  const saveEditedEmployee = (editedEmpObj) => {
    // let remainingEmp = employee.filter((emp) => emp.eId !== editedEmpObj.eId);
    // setEmployee([...remainingEmp, editedEmpObj]);

    let updatedEmployee = employee.map((emp) => {
      if (emp.eId === editedEmpObj.eId) {
        return editedEmpObj;
      } else {
        return emp;
      }
    });
    setEmployee([...updatedEmployee]);
    setIsEdit(false);
  };

  const cancelSave = () => {
    setSelectedEmployee(initialEmp);
    setIsEdit(false);
  };
  return (
    <>
      <h1 className="text-center">Employee Details App</h1>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h2>Employee List</h2>
            <EmployeeList
              employee={employee}
              handleDelete={handleDelete}
              editEmployee={editEmployee}
            />
          </div>
          <div className="col-sm-4">
            {isEdit ? (
              <EditEmployee
                selectedEmployee={selectedEmployee}
                saveEditedEmployee={saveEditedEmployee}
                cancelSave={cancelSave}
              />
            ) : (
              <AddEmployee addEmployee={addEmployee} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
