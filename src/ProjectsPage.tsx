import React, {useState, useEffect} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import {ProjectComponent} from "./ProjectComponent";
import {TodoistApi} from './TodoistApi';
import {Project} from './Project';
import {ExpandLess, ExpandMore} from "@mui/icons-material";


const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export const ProjectsPage = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const defaultProject: Project = {}
    const [project, setProject] = useState(defaultProject)

    const defaultProjects = new Array<Project>()
    const [projects, setProjects] = useState(defaultProjects)

    const [expandProjects, setExpandProjects] = useState(false)

    useEffect(() => {
        (async () => {
            const projects: Array<Project> = await TodoistApi.getProjects()
            setProjects(projects)
        })()
    }, [])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleExpandProjects = () => {
        setExpandProjects(!expandProjects)
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        TS Todoist
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {projects.map(({id, name}) => {
                        if (name !== "Inbox") return
                        return <ListItemButton sx={{pl: 4}}
                                               key={id}
                                               onClick={
                                                   () => setProject({id, name})
                                               }>
                            <ListItemText primary={name}/>
                        </ListItemButton>

                    })}
                    <ListItemButton onClick={handleExpandProjects} sx={{pl: 4}}>
                        <ListItemText primary="Projects"/>
                        {expandProjects ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={expandProjects} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {projects.map(({id, name}) => {
                                    if (name === "Inbox") return

                                    return <ListItemButton sx={{pl: 4}}
                                                           key={id}
                                                           onClick={
                                                               () => setProject({id, name})
                                                           }>
                                        <ListItemText primary={name}/>
                                    </ListItemButton>
                                }
                            )}
                            <Divider/>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader/>
                <ProjectComponent id={project.id} name={project.name}/>
            </Main>
        </Box>
    );
}