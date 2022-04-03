import axios from "axios";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Repos } from "../../pages/homepage/userModel";
import "./style.scss";

interface Props {
  name?: string;
  projects?: string[][];
  filteredProjects?: string[];
  projectInfo?: {};
}

export default function Projects({
  name,
  projects,
  filteredProjects,
  projectInfo,
}: Props): ReactElement {
  const [repos, setRepos] = useState<Repos[] | string[][]>();
  const ref = useRef(null);
  console.log("projectInfo:", projectInfo);

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.github.com/users/${name}/repos`
    );
    setRepos(
      name
        ? (data as Repos[]).filter(
            ({ name }) => !filteredProjects?.includes(name)
          )
        : projects
    );
    (ref?.current as any)?.addEventListener(
      "scroll",
      () => console.log("object"),
      false
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      {(repos as Repos[])?.map(
        ({ id, name, owner: { avatar_url, html_url } }) => (
          <Project {...{ id, name, avatar_url, html_url, ref, projectInfo }} />
        )
      )}
    </React.Fragment>
  );
}

function Project({
  name,
  avatar_url,
  html_url,
  ref,
  projectInfo,
}: any): ReactElement {
  console.log(projectInfo);
  return (
    <div className="project each-section" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="display-2--intro" id="intro-title">
            {name}
          </div>
        </div>
        <div className="row">
          {projectInfo?.hasOwnProperty(name)
            ? projectInfo[name]
            : "No description"}
        </div>
        <div className="row icon">
          <div
            className="flip-card"
            onClick={() => window.open(html_url + "/" + name, "_blank")}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="Avatar"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>Github</h1>
                <p>Click to open project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
