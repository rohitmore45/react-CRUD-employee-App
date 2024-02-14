import React, { useState } from "react";

export default function AddEmployee({ addEmployee }) {
  let initialEmp = { eId: "", name: "", sal: 0 };
  const [userEmp, setUserEmp] = useState(initialEmp);

  const changeHandler = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setUserEmp({ ...userEmp, [name]: value });
    // console.log(userEmp);
  };
  const handleAdd = () => {
    addEmployee(userEmp);
    setUserEmp(initialEmp);
  };
  return (
    <div>
      <h2>Add Employee</h2>

      <p>
        EId:
        <input value={userEmp.eId} name="eId" onChange={changeHandler} />
      </p>
      <p>
        Name:
        <input value={userEmp.name} name="name" onChange={changeHandler} />
      </p>
      <p>
        Sal:
        <input value={userEmp.sal} name="sal" onChange={changeHandler} />
      </p>
      <p>
        {userEmp.eId} {userEmp.name} {userEmp.sal}
      </p>
      <p>
        <button onClick={handleAdd}>Add</button>
      </p>
    </div>
  );
}
