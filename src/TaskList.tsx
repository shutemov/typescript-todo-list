import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function TaskList() {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Checkbox defaultChecked/>
                    </ListItemIcon>
                    <ListItemText primary="Drafts"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Checkbox defaultChecked/>
                    </ListItemIcon>
                    <ListItemText primary="Drafts"/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}