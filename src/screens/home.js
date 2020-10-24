import React, { useState } from "react";
import NavbarCustom from "../components/navbar";
import CustomTable from "../components/table";
let table1content = {
  tablehead: ["si.no", "First Name", "Last Name", "Username"],
  tabledata: [
    {
      no: 1,
      fname: "mark",
      lname: "Otto",
      uname: "@mdo",
    },
    {
      no: 2,
      fname: "mark",
      lname: "Otto",
      uname: "@mdo",
    },
  ],
};
let table2content = {
  tablehead: ["si.no", "First Name", "Last Name", "Username"],
  tabledata: [
    {
      no: 1,
      fname: "mark2",
      lname: "Otto2",
      uname: "@mdo2",
    },
  ],
};
const Home = () => {
  const [name, setName] = useState("React");
  const [tab1, setTab1] = useState(table1content);
  const [tab2, setTab2] = useState(table2content);
  return (
    <div>
      <h1>First table</h1>
      <CustomTable data={tab1} />
      <h1>Second table</h1>
      <CustomTable data={tab2} />
    </div>
  );
};
export default Home;
