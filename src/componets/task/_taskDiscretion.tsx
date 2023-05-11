import React, { FC, ReactElement } from "react";
import { Typography, Box} from '@mui/material'
import { ITaskDicription } from "./interfaces/ITaskDicription";


export const TaskDiscretion:FC<ITaskDicription> = (props):ReactElement => {

    const { description = 'This is a task' } = props

    return (
        <Box>
            <Typography>{description}</Typography>
        </Box>
    )
}