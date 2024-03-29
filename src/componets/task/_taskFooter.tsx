import React, { FC, ReactElement} from "react";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";


export const TaskFooter:FC = ():ReactElement => {
    return (
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        >
            <FormControlLabel control={<Switch color="warning" />} label="In Progress" />
            <Button
            variant="contained"
            color="success"
            size="small"
            sx={{ color: '#ffffff' }}
            >Mark Complete
            </Button>
        </Box>
    )
}