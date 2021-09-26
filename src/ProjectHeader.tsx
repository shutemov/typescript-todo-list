import Typography from "@mui/material/Typography";
import * as React from "react";

type ProjectHeader = {
    name: string
}

export const ProjectHeader = (props: ProjectHeader) => {
    const {name} = props
    return (
        <Typography variant="h3" align="left">
            {name}
        </Typography>
    )
}