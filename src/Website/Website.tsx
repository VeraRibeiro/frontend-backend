import { Theme } from "@material-ui/core";
import { Button, Grid, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { MainPage } from "./MainPage";
import WebsiteNavbar from "./Navbar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    overflowY: "hidden",
    height: "100vh",
    width: "100%",
  },
  backgroundImg: {
    backgroundImage: 'url("/workenvironment.webp")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    width: 350,
    height: 250,
  },
  signInBtn: {
    alignItems: "center",
    verticalAlign: "center",
    justifyContent: "center",
    color: "#1f1f1f",
    // marginTop: theme.spacing(2),
    // borderRadius: theme.spacing(1),
    fontSize: "16px",
    fontWeight: 600,
    display: "inline-flex",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  textType: {
    color: "#303030",
    display: "inline-block",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
}));

const Website: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <WebsiteNavbar />
      <Slide in direction="left" unmountOnExit mountOnEnter>
        <Grid container>
          <MainPage>
            <Grid item xs={6}>
              <Grid item xs={8} className={classes.textType}></Grid>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.backgroundImg} />
              <Grid item xs={12}>
                <Button
                  disableRipple
                  variant="contained"
                  className={classes.signInBtn}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </MainPage>
        </Grid>
      </Slide>
    </Grid>
  );
};

export default Website;
