import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {Task} from './Task'

export default function TaskList() {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <Task/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}