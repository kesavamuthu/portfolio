import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import Intro from "../../components/intro";
import Nav from "../../components/navigation";
import Projects from "../../components/projects";
import user from "../../user_details";
import usersDetailsType from "./userModel";
import "./homepage.scss";
import { motion, useScroll } from "framer-motion";

function Homepage(): ReactElement {
  const { name } = useParams() as { name: string };
  let userDetails = user.find((e) => e.name?.toLowerCase() === name); //not working
  if (!userDetails) userDetails = user[0];
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <Nav {...userDetails} />
      <div className="y-mandatory">
        <div className="wrapper">
          {[Intro, Projects].map((Component) => (
            <Component {...userDetails} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
