import React from 'react';
import { Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  barStyle: {
    backgroundColor: 'white',
  },
  signinBtn: {
    color: '#434343',
    fontWeight: 600,
    justifyContent: 'flex-start',
    display: 'inline-flex',
    cursor: 'default',
  },
}));

const WebsiteNavbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={1} position="fixed" className={classes.barStyle}>
        <Toolbar>
          <Grid container className={classes.signinBtn}>
            <Typography className={classes.signinBtn}>
              Admin Dashboard
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default WebsiteNavbar;
