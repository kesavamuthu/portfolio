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
import { animated, useSpring } from "@react-spring/web";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface Props {
  name?: string;
  projects?: string[][];
  filteredProjects?: string[];
  projectInfo: [{}];
  openSourceProjectsInfo: { [type: string]: any };
}

const showPercentageInView = 0.01;

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
          ({ id, name, owner: { avatar_url, html_url } }, idx) => (
            <Project
              {...{
                id,
                name,
                avatar_url,
                html_url,
                ref,
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

function Project({
  name,
  description,
  avatar_url,
  html_url,
  ref,
  openSourceProjectsInfo,
  idx,
}: any): ReactElement {
  console.log(openSourceProjectsInfo);
  const divRef = useRef(null);
  const animationDone = useRef({ l2r: false, r2l: false });

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["end end", "start start"],
  });

  const [springs, api] = useSpring(() => ({
    from: { x: -1200 },
  }));

  useEffect(() => {
    const isElementInView = () => {
      console.log(scrollYProgress, scrollYProgress.get(), divRef);

      return Number(scrollYProgress.get()) > showPercentageInView;
    };
    const unsubscribe = scrollYProgress.on("change", () => {
      const { l2r, r2l }: any = animationDone.current;
      if (isElementInView()) {
        if (!l2r || r2l) {
          animationDone.current.l2r = true;
          animationDone.current.r2l = false;
          api.start({
            from: {
              x: -1200,
            },
            to: {
              x: 0,
            },
          });
        }
      } else {
        if (!r2l) {
          animationDone.current.r2l = true;
          animationDone.current.l2r = false;
          api.start({
            from: {
              x: 0,
            },
            to: {
              x: -1200,
            },
          });
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <>
      <animated.div
        style={{
          ...springs,
        }}
      >
        <Grid item xs={12} sm={6} key={idx} ref={divRef}>
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
      </animated.div>
    </>
  );
}
