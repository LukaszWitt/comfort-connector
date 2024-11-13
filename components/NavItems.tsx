import React, { useState, MouseEvent } from 'react';
import { Grid, Box, Typography, Menu, MenuItem, Snackbar, Alert } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const NavItems: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const handleClick = (event: MouseEvent<HTMLElement>, contact: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedContact(contact);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopy = () => {
    if (selectedContact) {
      navigator.clipboard.writeText(selectedContact).then(() => {
        setSnackbarMessage('Skopiowano do schowka');
        setSnackbarOpen(true);
      });
    }
    handleClose();
  };

  const handleCallOrEmail = () => {
    if (selectedContact) {
      if (selectedContact.includes('@')) {
        window.location.href = `mailto:${selectedContact}`;
      } else {
        window.location.href = `tel:${selectedContact}`;
      }
    }
    handleClose();
  };

  return (
    <Box sx={{ bgcolor: '#031B31', padding: '14px' }}>
      <Grid container sx={{ color: '#FDD13C' }} justifyContent="flex-end">
        <Grid item>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={(e) => handleClick(e, '+48 505 725 281')}>
              <PhoneIcon sx={{ color: '#FDD13C', marginRight: '8px' }} />
              <Typography sx={{ color: '#FDD13C' }}>+48 505 725 281</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={(e) => handleClick(e, 'biuro@comfortconnector.pl')}>
              <EmailIcon sx={{ color: '#FDD13C', marginRight: '8px' }} />
              <Typography sx={{ color: '#FDD13C' }}>biuro.comfortconnector@gmail.com</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          disableListWrap: true,
          autoFocusItem: false,
        }}
        PaperProps={{
          sx: {
            bgcolor: '#333333',
            color: '#FFFFFF',
          },
        }}
      >
        <MenuItem onClick={handleCopy} disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, '&.Mui-focusVisible': { backgroundColor: 'transparent' } }}>Skopiuj</MenuItem>
        <MenuItem onClick={handleCallOrEmail} disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, '&.Mui-focusVisible': { backgroundColor: 'transparent' } }}>
          {selectedContact && selectedContact.includes('@') ? 'Napisz email' : 'Zadzwoń'}
        </MenuItem>
      </Menu>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NavItems;
