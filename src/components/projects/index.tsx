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
  projectInfo: [{}];
  openSourceProjectsInfo: { [type: string]: any };
}

export default function Projects({
  name: profileName,
  projects,
  filteredProjects,
  projectInfo,
  openSourceProjectsInfo,
}: Props): ReactElement {
  const [gitRepos, setGitRepos] = useState<Repos[] | string[][]>();
  const ref = useRef(null);
  console.log("projectInfo:", projectInfo);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${profileName}/repos`
        );
        setGitRepos(
          profileName
            ? (data as Repos[]).filter(
                ({ name }) => !filteredProjects?.includes(name)
              )
            : projects
        );
      } catch (error: any) {
        alert(error?.message);
      }
    })();
  }, [profileName, filteredProjects, projects]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} columns={12} justifyContent="space-evenly">
        {projectInfo.map((info, i) => (
          <Project key={i} {...info} />
        ))}
        {(gitRepos as Repos[])?.map(
          ({ id, name, owner: { html_url } }, idx) => (
            <Project
              {...{
                id,
                name,
                html_url,
                description: openSourceProjectsInfo[name],
                idx,
              }}
            />
          )
        )}
      </Grid>
    </Container>
  );
}

function Project({ name, description, html_url, idx }: any): ReactElement {
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
            {description || "No description"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          {!!html_url && (
            <Button
              size="small"
              onClick={() => window.open(html_url + "/" + name, "_blank")}
            >
              Learn More
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
