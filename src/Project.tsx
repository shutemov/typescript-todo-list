import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function Project() {
    return (
        <Box sx={{
            display: 'grid'
        }}>
            <Typography sx={{textAlign: 'left', margin: '30px 0 0 30px', fontSize: 'h3.fontSize'}}>
                Project name
            </Typography>
        </Box>
    );
}