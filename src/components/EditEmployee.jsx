import React, { useState } from "react";

export default function ({ selectedEmployee, saveEditedEmployee, cancelSave }) {
  let [editedEmp, setEditedEmp] = useState(selectedEmployee);

  let changeHandler = (e) => {
    const { name, value } = e.target;
    setEditedEmp({ ...editedEmp, [name]: value });
  };
  return (
    <div>
      <h2>Edit Employee</h2>
      <p>
        EId: <input value={editedEmp.eId} name="eId" onChange={changeHandler} />
      </p>
      <p>
        Name:
        <input value={editedEmp.name} name="name" onChange={changeHandler} />
      </p>
      <p>
        Sal: <input value={editedEmp.sal} name="sal" onChange={changeHandler} />
      </p>
      <p>
        <button type="button" class="btn btn-primary" onClick={cancelSave}>
          Cancel
        </button>
        <button
          onClick={() => {
            saveEditedEmployee(editedEmp);
          }}
        >
          Save Emp
        </button>
      </p>
    </div>
  );
}
