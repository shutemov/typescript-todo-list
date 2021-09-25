import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Section from './Section';

export const Project = () => {
    return (
        <Box sx={{
            display: 'grid'
        }}>
            <ProjectHeader/>
            <Section/>
        </Box>
    );
}