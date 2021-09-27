import Typography from "@mui/material/Typography";
import * as React from "react";

type ProjectHeaderType = {
    name?: string
}

export const ProjectHeader = (props: ProjectHeaderType) => {
    const {name} = props
    return (
        <Typography variant="h3" align="left">
            {name}
        </Typography>
    )
}