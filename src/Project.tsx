import React, {useState, useEffect} from 'react';
import {Section} from './Section';
import {ProjectHeader} from "./ProjectHeader";
import {getSections} from "./TodoistAPI";
import {Project as typeProject} from "./Project"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {ProjectsPage} from "./ProjectsPage";

type ProjectType = {
    id: number,
    name?: string,
    comment_count?: number,
    order?: number,
    color?: number,
    shared?: boolean,
    sync_id?: number,
    favorite?: boolean,
    parent_id?: number,
    team_inbox?: boolean,
    inbox_project?: boolean,
    url?: string
}

export const Project = (props: ProjectType) => {
    const {id, name} = props
    const [sections, setSections] = useState([])

    useEffect(() => {
        (async () => {
            if(!id) return
            const sections = await getSections(id)
            console.log('Project', sections)
            setSections(sections)
        })()

        return () => {
            setSections([])
        }

    }, [id])

    return (
        <Container>
            <Grid container direction="column">
                <Grid item xs={12} paddingTop={3} paddingBottom={3}>
                    <ProjectHeader name={name}/>
                </Grid>
                <Grid container rowSpacing={5}>
                    {sections.map(({id, name}) => {
                        return (
                            <Grid key={id} item xs={12} md={4}>
                                <Section name={name}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}
