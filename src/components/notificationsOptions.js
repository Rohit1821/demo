import React from "react";
import {
  IconButton,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  notifText: {
    color: "Black",
    padding: 5,
  },
}));

const NotificationsOptions = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const classes = useStyles();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  //dummy array start:
  const dummyData = [
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense of 2000rs approved`,
    `Expense of 3000 rs rejected`,
    `Expense report of month July 2022 generated `,
    `Expense report of month July 2022 generated `,
    `Expense report of month July 2022 generated `,
    `Expense report of month July 2022 generated `,
  ];
  // console.log(dummyData);
  // dummy data array ends
  return (
    <div>
      <IconButton>
        <Badge badgeContent={dummyData.length} color="primary">
          <NotificationsIcon onClick={handleClickOpen("paper")} />
        </Badge>
      </IconButton>
      {/* <Button onClick={handleClickOpen("body")}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Your Notifications</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {dummyData.map((notif) => {
              return <div className={classes.notifText}>{notif}</div>;
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NotificationsOptions;
