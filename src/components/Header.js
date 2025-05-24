import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Header = ({ themeMode, toggleTheme }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 3 }}>
    <Typography variant="h4" fontWeight="bold">📝 TO-DO LIST</Typography>
   <IconButton onClick={toggleTheme} color="primary">
  {themeMode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
</IconButton>
  </Stack>
);

export default Header;
