import React, { useState } from "react";
import "../css/index.css";
import { IEmployee } from "../utils/interface";
import DetailPage from "./DetailPage";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};
const Employee = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {list.map((employee) => {
          console.log(employee);
          return (
            <tr key={employee.id}>
              <td>
                {`${employee.firstName}`} {`${employee.lastName}`}
              </td>
              <td>{employee.email}</td>
              <td>
                <div className="inputs">
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <DetailPage onClose={onCloseModal} data={dataToShow} />
      )}
    </>
  );
};

export default Employee;
