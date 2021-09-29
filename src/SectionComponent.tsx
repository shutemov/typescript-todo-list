import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Add from "@mui/icons-material/Add";
import {Section, Tasks} from "./Section";
import {TaskList} from "./TaskList";
import {SectionOptionPopper} from "./SectionOptionPopper";

export const SectionComponent = (props: Section & Tasks) => {
    const {name, tasks} = props

    return (
        <Card sx={{maxWidth: '325px'}}>
            <CardHeader
                action={
                    <SectionOptionPopper/>
                }
                title={name}
                align="left"
            />
            <Divider/>
            <CardContent>
                <TaskList tasks={tasks}/>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button sx={{width: '100%'}} variant="contained" endIcon={<Add/>}>
                    Add task
                </Button>
            </CardActions>
        </Card>
    );
}