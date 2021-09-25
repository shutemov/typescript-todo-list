import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Section from './Section';

export default function Project() {
    return (
        <Box sx={{
            display: 'grid'
        }}>
            <Typography variant="h3" align="left">
                Project name
            </Typography>
            <Section/>
        </Box>
    );
}