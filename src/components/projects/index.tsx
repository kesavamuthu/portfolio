import axios from "axios";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Repos } from "../../pages/homepage/userModel";
import "./style.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

interface Props {
  name?: string;
  projects?: string[][];
  filteredProjects?: string[];
  projectInfo?: {};
}

export default function Projects({
  name: profileName,
  projects,
  filteredProjects,
  projectInfo,
}: Props): ReactElement {
  const [repos, setRepos] = useState<Repos[] | string[][]>();
  const ref = useRef(null);
  console.log("projectInfo:", projectInfo);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${profileName}/repos`
      );
      setRepos(
        profileName
          ? (data as Repos[]).filter(
              ({ name }) => !filteredProjects?.includes(name)
            )
          : projects
      );
    } catch (error: any) {
      alert(error?.message);
    }
    // (ref?.current as any)?.addEventListener(
    //     "scroll",
    //     () => console.log("object"),
    //     false
    // );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} columns={12} justifyContent="space-evenly">
        {(repos as Repos[])?.map(
          ({ id, name, owner: { avatar_url, html_url } }, idx) => (
            <Project
              {...{
                id,
                name,
                avatar_url,
                html_url,
                ref,
                projectInfo,
                idx,
              }}
            />
          )
        )}
      </Grid>
    </Container>
  );
}

function Project({
  name,
  avatar_url,
  html_url,
  ref,
  projectInfo,
  idx,
}: any): ReactElement {
  console.log(projectInfo);
  return (
    <Grid item xs={12} sm={6} key={idx}>
      <Card sx={{ minWidth: 345 }} className=" my-3">
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.uib.no/sites/w3.uib.no/files/styles/content_main/public/media/colourbox3117235_no5859_edit.jpg?itok=kPbJVL51"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {projectInfo?.hasOwnProperty(name)
              ? projectInfo[name]
              : "No description"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button
            size="small"
            onClick={() => window.open(html_url + "/" + name, "_blank")}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
