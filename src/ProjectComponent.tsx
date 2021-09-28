import React, {useState, useEffect} from 'react';
import {SectionComponent} from './SectionComponent';
import {ProjectHeader} from "./ProjectHeader";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Project} from "./Project";
import {TodoistApi} from './TodoistApi';
import {Section} from "./Section";
import {Task} from "./Task";

export const ProjectComponent = (props: Project) => {
    const {id, name} = props

    const defaultSections = new Array<Section>()
    const [sections, setSections] = useState(defaultSections)

    const defaultTasks = new Array<Task>()
    const [activeTasks, setActiveTasks] = useState(defaultTasks)

    const sectionTasks = (sectionId: number = 0): Array<Task> => {
        return activeTasks.filter(({section_id}) => section_id === sectionId)
    }

    useEffect(() => {
        (async () => {
            if (!id) return //default havent id
            const sections: Array<Section> = await TodoistApi.getSections(id)
            setSections(sections)
        })()

        return () => {
            setSections(new Array<Section>())
        }
    }, [id])

    useEffect(() => {
        (async () => {
            if (!id) return //default havent id
            const activeTasks: Array<Task> = await TodoistApi.getActiveTasks()
            setActiveTasks(activeTasks)

            return () => {
                setActiveTasks(new Array<Task>())
            }
        })()
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
                                <SectionComponent name={name} tasks={sectionTasks(id)}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}
