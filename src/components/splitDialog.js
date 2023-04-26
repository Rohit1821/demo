import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  splitContainerBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
  },
  splitHeaderBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px",
  },
  splitHeaderBoxText: {},
  splitHeaderBoxTotal: {
    display: "flex",
    justifyContent: "space-between",
  },
  splitHeaderBoxTotalText: {},
  splitHeaderBoxTotalAmount: {},
  splitBoxMain: {
    padding: "10px",
    paddingRight: "25px",
    paddingLeft: "25px",
  },
  splitBox: {
    backgroundColor: "#F0F6FB",
    height: "165px",
    overflow: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "100px",
      color: "#CCCCCC",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
  splitGridContainer: {},
  splitGridItem: {},
  splitGridBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "#F0F6FB",
  },
  claimAmount: {
    backgroundColor: "#FCFDFF",
    borderRadius: 4,
  },
  splitFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "25px",
  },
}));

function ShareDialog(props) {
  const classes = useStyles();
  const [splitAmount, setSplitAmount] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleAmount = (key, e) => {
    let array = [...splitAmount];
    let amount = e.target.value;
    array[key].amount = amount;
    setSplitAmount(array);
  };
  const handleClick = () => {
    setToggle(true);
    props.splitAmount(splitAmount);
  };

  useEffect(() => {
    if (props?.projectid?.length > 0) {
      const array = [];
      props.projectid.forEach((element) => {
        if (element.amount) {
          array.push({ id: element.id, amount: element.amount });
        } else {
          array.push({ id: element.id });
        }
      });
      setSplitAmount(array);
    }
  }, [props.projectid]);
  console.log("checking ", splitAmount);

  return (
    <Box className={classes.splitContainerBox}>
      <Box className={classes.splitHeaderBox}>
        <Typography className={classes.splitHeaderBoxText}>
          Split Amount
        </Typography>
        <Box className={classes.splitHeaderBoxTotal}>
          <Typography className={classes.splitHeaderBoxTotalText}>
            Total:
          </Typography>
          <Box className={classes.splitHeaderBoxTotalAmount}>Rs. 3000</Box>
        </Box>
      </Box>
      <Box className={classes.splitBoxMain}>
        <Box className={classes.splitBox}>
          {props.projectid?.map((value, key) => {
            return (
              <Box className={classes.splitGridBox}>
                <Typography style={{ paddingRight: "35px" }}>
                  {value.projectID}
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Claim Amount*"
                  variant="outlined"
                  className={classes.claimAmount}
                  value={splitAmount[key]?.amount || ""}
                  onChange={(e) => handleAmount(key, e)}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className={classes.splitFooter}>
        <Box
          style={{
            padding: "5px",
          }}
        >
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#0B1941",
              width: "139px",
              height: "36px",
              padding: "5px",
            }}
          >
            Cancel
          </Button>
        </Box>
        <Box
          style={{
            padding: "5px",
          }}
        >
          <Button
            onClick={(e) => handleClick(e)}
            style={{
              backgroundColor: "#0B1941",
              color: "#FFFFFF",
              width: "139px",
              height: "36px",
              padding: "5px",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ShareDialog;
