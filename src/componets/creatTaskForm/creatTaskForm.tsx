import React, {FC, ReactElement} from "react";
import {Box, Typography, Stack} from "@mui/material";


import {TaskTitleField} from "./_taskTitleField";
import {TaskDescriptionField} from "./_taskDescriptionField";
import { TaskDataField } from "./_taskDataField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

export const CreatTaskForm:FC = ():ReactElement => {
    return(
        <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        px={4}
        my={6}
        >
        <Typography mb={2} component="h2" variant="h6">
            Creat A Task
        </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField />
                <TaskDescriptionField />
                <TaskDataField />

                <Stack
                    sx={{ width: '100%' }}
                    direction="row" spacing={2}></Stack>
                <TaskSelectField
                    label="Status"
                    name="status"
                    items={[
                        {
                        value: Status.todo,
                        label: Status.todo.toUpperCase()
                         },
                        {
                            value: Status.inProgress,
                            label: Status.inProgress.toUpperCase()
                        }
                    ]}/>
                <TaskSelectField
                label="Priority"
                name="priority"
                items={[
                    {
                    value: Priority.low,
                    label: Priority.low,
                    },
                    {
                        value: Priority.normal,
                        label: Priority.normal,
                    },
                    {
                        value: Priority.high,
                        label: Priority.high,
                    },
                ]}
                />
            </Stack>

        </Box>
    )
}

