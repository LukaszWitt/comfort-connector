import { Box, Grid } from '@mui/material';
import React from 'react';
import NavItems from '../components/NavItems';
import Image from 'next/image';

const Nav = () => {
  return (
    <Box
      width={'100%'}
      sx={{
        bgcolor: '#031B31',
        padding: '0px',
        position: 'relative',
        maxWidth: '100%',
        margin: '0 auto',
        paddingBottom: '5px',
      }}
    >
      <Grid container alignItems="center" justifyContent="center" position="relative">
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: 'center',
            position: 'relative',
            display: {
              xs: 'none',
              lg: 'flex', 
            },
          }}
        ></Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            '& img': {
              width: { xs: '270px', lg: '540px' },
              height: 'auto',
            },
          }}
        >
          <Image src='/comfort.png' alt="logo" width={540} height={300} style={{ height: 'auto' }} />
        </Grid>

        <Grid item xs={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <NavItems />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
