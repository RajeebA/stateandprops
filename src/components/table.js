import React from "react";
import { Table } from "react-bootstrap";
const CustomTable = (props) => {
  console.log(props);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {props.data.tablehead.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.tabledata.map((item) => (
          <tr>
            <td>{item.no}</td>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.uname}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default CustomTable;
