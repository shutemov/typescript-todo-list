import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {TaskComponent} from './TaskComponent'
import {Tasks} from "./Section";

export const TaskList = (props: Tasks) => {
    const {tasks} = props
    return (
        <List>
            {tasks.map(({id, content, completed}) => {
                return (
                    <ListItem key={id} disablePadding>
                        <ListItemButton>
                            <TaskComponent content={content} completed={completed}/>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}