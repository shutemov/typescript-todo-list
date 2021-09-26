import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import React from "react";

export const Task = () => {
    const [checked, setChecked] = React.useState(false);
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
            label="test"
        />
    )
}