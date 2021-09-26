import * as React from 'react';
import {Section} from './Section';
import {ProjectHeader} from "./ProjectHeader";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export const Project = () => {
    return (
        <Container>
            <Grid container direction="column">
                <Grid item xs={12} paddingTop={3} paddingBottom={3}>
                    <ProjectHeader/>
                </Grid>
                <Grid container rowSpacing={5}>
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
