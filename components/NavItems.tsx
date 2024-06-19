import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const NavItems = () => {
  return (
    <Box sx={{ bgcolor: '#031B31', padding: '14px' }}>
      <Grid container sx={{ color: '#FDD13C' }} justifyContent="flex-end">
        <Grid item>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ color: '#FDD13C', marginRight: '8px' }} />
              <Typography sx={{ color: '#FDD13C' }}>+48 505 725 281</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ color: '#FDD13C', marginRight: '8px' }} />
              <Typography sx={{ color: '#FDD13C' }}>biuro@comfortconnector.pl</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavItems;
