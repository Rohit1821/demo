import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Badge, IconButton } from "@material-ui/core";
// import logo from "../images/incedo_Logo.jpg";
import AccountOptions from "./accountOptions";
import NotificationsOptions from "./notificationsOptions";
const useStyles = makeStyles((theme) => ({
  logo: {
    width: "70px",
    height: "30px",
  },
  header: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  logoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashboardText: {
    color: "Black",
    padding: 5,
  },
  nameText: {
    color: "Black",
    padding: 10,
  },
  accountOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 0,
  },
}));

const SideNav = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoBox}>
            {/* <img src={logo} className={classes.logo} alt="logo" /> */}
            <div className={classes.dashboardText}>Dashboard</div>
          </div>
          <div className={classes.accountOptions}>
            {/* <IconButton>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <NotificationsOptions />
            <span className={classes.nameText}>| Jones Ferdinand</span>
            <AccountOptions />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SideNav;
