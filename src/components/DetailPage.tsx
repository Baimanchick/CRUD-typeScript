import React from "react";
import { IEmployee } from "../utils/interface";

type Props = {
  onClose: () => void;
  data: IEmployee;
};

const DetailPage = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Employee Data</h3>
        <div>
          <div>
            <label>First Name : {data.firstName}</label>
          </div>
          <div>
            <label>Last Name : {data.lastName}</label>
          </div>
          <div>
            <label>Email Add. : {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
