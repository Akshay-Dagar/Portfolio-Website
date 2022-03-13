import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, MenuItem, Tooltip, Avatar, IconButton } from '@mui/material';
import useStyles from "./styles.js";

const pages = ["Home", "Projects", "Skills", "Reviews", "Contact"];

const NavBar = () => {

  const classes = useStyles();

  return (
    <AppBar className={classes.AppBar}>
        <Toolbar disableGutters className={classes.Toolbar}>
          <Box flex={1} textAlign="left" paddingLeft="10px">
            <Tooltip title="Akshay Dagar">
              <IconButton>
                <Avatar alt="Akshay" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={classes.NavMenu}>
            {pages.map(page => (
              <Button key={page} className={classes.NavMenuItem} sx={{ color: 'white' }}>
                <Typography textAlign="center">{page}</Typography>
              </Button>
            ))}
          </Box>
          <Box flex={1} textAlign="right" paddingRight="10px">
            <Tooltip title="Linkedin" >
                <IconButton>
                  <Avatar alt="linkedin" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Tooltip title="Github" >
                <IconButton>
                  <Avatar alt="Github" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Tooltip title="UpWork" >
                <IconButton>
                  <Avatar alt="UpWork" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Tooltip title="Blog" >
                <IconButton>
                  <Avatar alt="Blog" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
          </Box>
          {/*<Typography className={classes.NavMenuSecondaryItems}>Blog</Typography>*/}
        </Toolbar>
    </AppBar>
  );
};

export default NavBar;