import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  TextField,
  Select,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "16px 0 8px 0",
    minWidth: "124px",
    height: "24px",
    // notchedOutline: {
    //   borderColor: "#CB444A",
    //   borderRadius: 8,
    // },
    "& .MuiFormLabel-root": {
      top: "-4px",
      color: "#515961",
    },
    "& .MuiInputBase-root": {
      "&.Mui-focused fieldset": {
        border: "2px solid #439DD9",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#515961",
      },
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropdownStyle: {
    "& ul": {
      padding: 0,
      border: "0.5px solid #515961",
      boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
      borderRadius: 5,
    },
    "& li": {
      height: 47,
      fontSize: 14,
      color: "#515961",
      "&:hover": {
        backgroundColor: "rgba(217, 235, 247, 0.4);",
        color: "#439DD9",
      },
    },
  },
  selectRoot: {
    borderRadius: 8,
    "& .MuiInputBase-root": {
      "&.Mui-focused fieldset": {
        border: "#439DD9",
      },
    },
    "&:focus": {
      backgroundColor: "transparent",
      borderRadius: 8,
    },
  },

  addExpenseButton: {
    height: "42px",
    width: "180px",
    background: " #0B1941",
    boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
    borderRadius: "5px",
    "&:hover": {
      background: " #0B1941",
      boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
    },
    "&:focus": {
      background: " #0B1941",
      boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
    },
  },
  buttonText: {
    color: "#FFFFFF",
    alignItems: "center",
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "end",
    marginTop: "20px",
  },
  expenseCard: {
    width: "360px",
    height: "110px",
    background: "#FFFFFF",
    border: "1px solid #979797",
    borderRadius: " 8px",
  },
  approveText: {
    color: "#4C4C4C",
    alignTtems: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    marginLeft: "76px",
  },
  approveCount: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "42px",
  },
  approveIcon: {
    background: "#ECFFFB",
  },
  pendingText: {
    background: " #FFF2DF",
  },

  rejectIcon: {
    background: "#FFE9ED",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    console.log("int the landing page");
    history.push("/create-Expense-Management");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Box>
        <Grid container>
          <Grid item xs={6} sm={6} md={6} className={classes.purpose}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select*
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                //   value={age}
                // onChange={(e) => setPurpose(e.target.value)}
                label="Select*"
                MenuProps={{
                  //   classes: { paper: classes.dropdownStyle },
                  //   anchorOrigin: {
                  //     vertical: "bottom",
                  //     horizontal: "left",
                  //   },
                  //   transformOrigin: {
                  //     vertical: "top",
                  //     horizontal: "left",
                  //   },
                  getContentAnchorEl: null,
                }}
              >
                <MenuItem value={90}>90 Days</MenuItem>
                <MenuItem value={180}>180 Days</MenuItem>
                <MenuItem value={`year Till Date`}>year Till Date</MenuItem>
              </Select>
            </FormControl>{" "}
          </Grid>
          <Grid item xs={6} sm={6} md={6} className={classes.buttonGrid}>
            <Button
              variant="contained"
              className={classes.addExpenseButton}
              onClick={() => handleClick()}
            >
              <Typography variant="p" className={classes.buttonText}>
                + Add New Expense
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container style={{ marginTop: "30px" }}>
          <Grid item xs={4} sm={4} md={4}>
            <Grid item xs={4} sm={4} md={11} className={classes.expenseCard}>
              <Box>
                <Typography variant="p" className={classes.approveIcon}>
                  svxgfdf
                </Typography>
                <Typography variant="p" className={classes.approveText}>
                  {"Approve Expense"}
                </Typography>
                <Typography variant="p" className={classes.approveCount}>
                  {"03"}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Grid item xs={4} sm={4} md={11} className={classes.expenseCard}>
              <Box>
                <Typography variant="p" className={classes.pendingText}>
                  svxgfdf
                </Typography>
                <Typography variant="p" className={classes.approveText}>
                  {"Pending Expense"}
                </Typography>
                <Typography variant="p" className={classes.approveCount}>
                  {"01"}
                </Typography>
              </Box>{" "}
            </Grid>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Grid item xs={4} sm={4} md={12} className={classes.expenseCard}>
              <Box>
                <Typography variant="p" className={classes.rejectIcon}>
                  svxgfdf
                </Typography>
                <Typography variant="p" className={classes.approveText}>
                  {"Rejected Expense"}
                </Typography>
                <Typography variant="p" className={classes.approveCount}>
                  {"01"}
                </Typography>
              </Box>{" "}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LandingPage;
