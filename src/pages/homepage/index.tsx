import React, { ReactElement } from "react";
import {
  useParams
} from "react-router-dom";
import Intro from "../../components/intro";
import Nav from "../../components/navigation";
import Projects from "../../components/projects";
import user from "../../user_details";
import usersDetailsType from "./userModel";

interface Props {}

function Homepage({}: Props): ReactElement {
  const { name } = useParams() as { name: string };
  const userDetails = user.find(
    (e) => e.name?.toLowerCase() === name
  ) as usersDetailsType; //not working
  return (
    <>
      {[Nav, Intro, Projects].map((E) => (
        <E {...userDetails} />
      ))}
    </>
  );
}

export default Homepage;
