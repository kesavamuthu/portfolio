import axios from "axios";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Repos } from "../../pages/homepage/userModel";
import "./style.scss";

interface Props {
  name?: string;
  projects?: string[][];
  filteredProjects?: string[];
}

export default function Projects({
  name,
  projects,
  filteredProjects,
}: Props): ReactElement {
  const [repos, setRepos] = useState<Repos[] | string[][]>();
  const ref = useRef(null);
  console.log(repos);
  useEffect(() => {
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
    };
    getData();
    (ref?.current as any)?.addEventListener(
      "scroll",
      () => console.log("object"),
      false
    );
    return function cleanup() {
      (ref?.current as any).removeEventListener(
        "scroll",
        () => console.log("object"),
        false
      );
    };
  }, []);

  return (
    <React.Fragment>
      {(repos as Repos[])?.map(
        ({ id, name, owner: { avatar_url, html_url } }) => (
          <Project {...{ id, name, avatar_url, html_url, ref }} />
        )
      )}
    </React.Fragment>
  );
}

function Project({ name, avatar_url, html_url, ref }: any): ReactElement {
  return (
    <div className="p-5 mb-4 bg-light rounded-3" ref={ref}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{name}</h1>
        <p className="col-md-8 fs-4">{html_url}</p>
        <button
          className="btn btn-primary btn-lg"
          type="button"
          onClick={() => window.open(html_url + "/" + name, "_blank")}
        >
          Github
        </button>
      </div>
    </div>
  );
}
