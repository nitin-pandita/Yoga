import React from "react";
import { Nav, Description, MemberShip, Courses, Contact } from "./sections";
const App = () => {
  return (
    <div>
      <div className="nav">
        <Nav />
      </div>
      <div className="description">
        <Description />
      </div>
      <div className="memberShip">
        <MemberShip />
      </div>
      <div className="course">
        <Courses />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
