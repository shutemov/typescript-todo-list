import React, {useState, useEffect} from 'react';
import {Section} from './Section';
import {ProjectHeader} from "./ProjectHeader";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import {apiConfig} from "./apiconfig";

type Section = {
    name: string
}

type Project = {
    id: string
}

export const Project = () => {
    const [sections, setSections] = useState([])

    useEffect(() => {
        (async () => {
            const url = `https://api.todoist.com/rest/v1/projects`
            const headers: HeadersInit = new Headers();
            headers.set('Authorization', `Bearer ${apiConfig.access_key}`);

            const response = await fetch(url, {headers})
            const data = await response.json()
            setSections(data)
        })()
    }, [])

    return (
        <Container>
            <Grid container direction="column">
                <Grid item xs={12} paddingTop={3} paddingBottom={3}>
                    <ProjectHeader name="test"/>
                </Grid>
                <Grid container rowSpacing={5}>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            {sections.map(({name}) => {
                                return (<h6 key={name}>{name}</h6>)
                            })}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Section/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Section/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Section/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
