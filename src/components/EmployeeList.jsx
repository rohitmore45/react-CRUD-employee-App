import React from "react";

export default function EmployeeList({ employee, handleDelete, editEmployee }) {
  return (
    <>
      <table className="table table-bordered table-striped">
        <tbody>
          {employee.map((emp) => {
            return (
              <>
                <tr key={emp.eId}>
                  <td>{emp.eId}</td>
                  <td>{emp.name}</td>
                  <td>{emp.sal}</td>
                  <td className="w-25">
                    <button className="btn btn-sm btn-info me-1">View</button>
                    <button
                      className="btn btn-sm btn-warning me-1"
                      onClick={() => editEmployee(emp)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(emp.eId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
