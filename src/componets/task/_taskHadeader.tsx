import React, { FC, ReactElement } from "react";
import { Box, Chip, Typography } from '@mui/material'
import { ITaskheader } from "./interfaces/ITaskheader";
import { format } from 'date-fns'


export const TaskHeader:FC<ITaskheader> = (props):ReactElement => {

    const {title = 'Default Title', date = new Date() } = props

    return (
        <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        mb={3}
        >
            <Box>
                <Typography variant="h6">{title}</Typography>
            </Box>
            <Box>
                <Chip
                    variant="outlined"
                    label={format(date, 'PPP')}
            />
            </Box>
        </Box>
    )
}