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

}
