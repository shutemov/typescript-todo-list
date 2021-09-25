import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import Add from "@mui/icons-material/Add";

export const Section = () => {
    return (
        <Card sx={{maxWidth: '325px'}}>
            <CardActionArea>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Section Name"
                    align="left"
                />
            </CardActionArea>
            <CardContent>
                <TaskList/>
            </CardContent>

            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button sx={{width: '100%'}} variant="contained" endIcon={<Add/>}>
                    Add task
                </Button>
            </CardActions>
        </Card>
    );
}