import React, { useState } from "react";
import "../css/index.css";
import { IEmployee, PageEnum, dummyEmployeeList } from "../utils/interface";
import Employee from "./Employee";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const HomePage: React.FC = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  function onAddEmployeeClickHnd() {
    setShownPage(PageEnum.add);
  }

  function addEmployee(data: IEmployee) {
    setEmployeeList([...employeeList, data]);
  }

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
  };

  return (
    <>
      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHnd}
              className="add-employee-btn"
            />
            <Employee
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployee}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default HomePage;
