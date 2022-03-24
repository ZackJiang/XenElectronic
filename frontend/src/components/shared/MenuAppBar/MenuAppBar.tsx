import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

interface IMenuAppBarProps {
  title: string;
  path: string;
}

export const MenuAppBar: React.FC<IMenuAppBarProps> = ({ path, title }) => {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignItems: 'center' }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => history.push(path)}
              color="inherit"
            >
              <ArrowBackIcon />
            </IconButton>

            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
