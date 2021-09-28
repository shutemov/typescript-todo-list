import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import React, {useState} from "react";
import {Task} from "./Task";

export const TaskComponent = (props: Task) => {
    const {content, completed} = props
    const [checked, setChecked] = useState(completed);

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    icon={<CheckCircleRoundedIcon/>}
                    checkedIcon={<CheckCircleOutlineRoundedIcon color="success"/>}
                    onChange={() => {
                        setChecked(!checked)
                    }}
                />
            }
            label={content}
        />
    )
}