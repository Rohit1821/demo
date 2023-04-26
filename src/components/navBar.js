import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import Header from "./header";
import ExpenseManagement from "../pages/Expense/expenseManagement";
import { useHistory, useLocation } from "react-router";
import ExpenseLandingPage from "../pages/Expense/landingPage";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  //   drawerPaper: {
  //     width: drawerWidth,
  //   },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
export default function ClippedDrawer() {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [text, setText] = useState("All Expense");
  const handleClick = (text) => {
    console.log("???", text);
    setText(text);
  };

  const handleIconButton = (value) => {
    if (value === "Home") {
      console.log("home");
      history.push("/");
    } else if (value === "All Expense") {
      console.log("all");

      history.push("/expense-Management");
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Header heading={text} />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Home", "All Expense", "Timesheet"].map((text, index) => (
              <ListItem
                button
                key={text}
                style={{ display: "block" }}
                onClick={(e) => {
                  handleIconButton(text);
                }}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <div className="Icon">
                      <HomeIcon />
                    </div>
                  ) : index === 1 ? (
                    <AttachMoneyIcon />
                  ) : (
                    <FeaturedPlayListIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {location.pathname === "/expense-Management" && (
          <>
            <ExpenseLandingPage />
          </>
        )}
      </main>
    </div>
  );
}
