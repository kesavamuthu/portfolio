import axios from 'axios'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { Repos } from '../../pages/homepage/userModel'
import './style.scss'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Container, Grid } from '@mui/material'
import { motion, useInView, Variants } from 'framer-motion'

interface Props {
    name?: string
    projects?: string[][]
    filteredProjects?: string[]
    projectInfo: [{}]
    openSourceProjectsInfo: { [type: string]: any }
}

const showPercentageInView = 0.01

export default function Projects({
    name: profileName,
    projects,
    filteredProjects,
    projectInfo,
    openSourceProjectsInfo,
}: Props): ReactElement {
    const [gitRepos, setGitRepos] = useState<Repos[] | string[][]>()
    const ref = useRef(null)
    console.log('projectInfo:', projectInfo)

    useEffect(() => {
        ;(async () => {
            try {
                const { data } = await axios.get(
                    `https://api.github.com/users/${profileName}/repos`
                )
                setGitRepos(
                    profileName
                        ? (data as Repos[]).filter(
                              ({ name }) => !filteredProjects?.includes(name)
                          )
                        : projects
                )
            } catch (error: any) {
                alert(error?.message)
            }
        })()
    }, [profileName, filteredProjects, projects])

    return (
        <Container maxWidth="lg">
            <Grid
                container
                spacing={2}
                columns={12}
                justifyContent="space-evenly"
                style={{ overflow: 'hidden' }}
            >
                {projectInfo.map((info, i) => (
                    <Project key={i} {...info} />
                ))}
                {(gitRepos as Repos[])?.map(
                    ({ id, name, owner: { html_url } }, idx) => (
                        <Project
                            key={id}
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
    )
}
const cardVariants: Variants = {
    offscreen: (custom: number) => ({
        x: custom % 2 === 0 ? -200 : 200, // Alternate directions
        y: custom * 10, // Slight vertical offset for uniqueness
        opacity: 0,
        scale: 0.8,
        transition: {
            type: 'spring',
            bounce: 0.6,
            duration: 1.2,
        },
    }),
    onscreen: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

function Project({
    name,
    description,
    html_url,
    idx: custom,
}: any): ReactElement {
    const cardRef = useRef(null)
    const inView = useInView(cardRef, {
        amount: 0.1,
        once: true,
    })
    if (!name && !description) return null
    return (
        <motion.div
            className="card-container"
            ref={cardRef}
            custom={custom}
            variants={cardVariants}
            initial="offscreen"
            animate={inView ? 'onscreen' : 'offscreen'}
        >
            <motion.div
                className="card"
                variants={cardVariants}
                style={{ border: 'none' }}
            >
                <Grid item xs={12} sm={6} key={custom}>
                    <Card sx={{ minWidth: 345 }} className=" my-3">
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://www.uib.no/sites/w3.uib.no/files/styles/content_main/public/media/colourbox3117235_no5859_edit.jpg?itok=kPbJVL51"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description || ''}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            {!!html_url && (
                                <Button
                                    size="small"
                                    onClick={() =>
                                        window.open(
                                            html_url + '/' + name,
                                            '_blank'
                                        )
                                    }
                                >
                                    Learn More
                                </Button>
                            )}
                        </CardActions>
                    </Card>
                </Grid>
            </motion.div>
        </motion.div>
    )
}

const cardStyle = {
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    transformOrigin: 'center center',
}
