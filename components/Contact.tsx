import { Box, Grid } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <Box>
        <Grid container>
            <Grid item xs={12}>
                <LocalPhoneIcon />
            </Grid>
            <Grid item xs={12}>
                <EmailIcon />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Contact