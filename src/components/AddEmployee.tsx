import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IEmployee } from "../utils/interface";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };
  return (
    <>
      <form onSubmit={onSubmitBtnClickHnd} className="form-input">
        <div>
          <label>first Name</label>
          <input type="text" onChange={onFirstNameChangeHnd} />
          <label>last Name</label>
          <input type="text" onChange={onLastNameChangeHnd} />
          <label>Email</label>
          <input type="text" onChange={onEmailChangeHnd} />
        </div>
        <div>
          <button onClick={onBackBtnClickHnd}>Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
