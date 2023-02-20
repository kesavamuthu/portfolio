import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import Intro from "../../components/intro";
import Nav from "../../components/navigation";
import Projects from "../../components/projects";
import user from "../../user_details";
import usersDetailsType from "./userModel";
import "./homepage.scss";

function Homepage(): ReactElement {
  const { name } = useParams() as { name: string };
  let userDetails = user.find(
    (e) => e.name?.toLowerCase() === name
  ) as usersDetailsType; //not working
  if (!userDetails) userDetails = user[0];
  return (
    <>
      <Nav {...userDetails} />
      <div className="y-mandatory">
        <div className="wrapper">
          {[Intro, Projects].map((E) => (
            <E {...userDetails} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
