import React, { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { TaskHeader } from "./_taskHadeader";
import { TaskDiscretion } from "./_taskDiscretion";
import { TaskFooter } from "./_taskFooter";


export const Task:FC = (props):ReactElement => {



    return (
            <Box
            display="flex"
            width="100%"
            justifyContent="flex-start"
            flexDirection="column"
            mb={2}
            p={4}
            sx={{
                width: '100%',
                backgroundColor: 'background.paper',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'error.light',
            }}
            >
                <TaskHeader />
                <TaskDiscretion />
                <TaskFooter />
            </Box>
    )
}