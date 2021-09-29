import React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

export const SectionOptionPopper = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <IconButton aria-describedby={id} aria-label="settings" onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <ModeEditOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Edit section" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArrowForwardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Move section" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArchiveTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Archive" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <FileCopyTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Duplicate" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <DeleteTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Delete section" />
                        </ListItemButton>
                    </List>
                </Box>
            </Popper>
        </div>
    );
}