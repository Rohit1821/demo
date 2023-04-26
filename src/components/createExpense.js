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
  Link,
  Checkbox,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DateFnsUtils from "@date-io/date-fns";
import ProjectId from "./multiSelectProject";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Dialog from "./splitDialog";
import DragDrope from "./dragDrope";
import { FieldValidator } from "./validation";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F8F9FF",
  },
  formControl: {
    margin: "16px 0 8px 0",
    minWidth: "100%",
    backgroundColor: "#FCFDFF",
    borderRadius: 4,
    notchedOutline: {
      borderColor: "#CB444A",
      borderRadius: 4,
    },
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
      borderRadius: 4,
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
    borderRadius: 4,
    "& .MuiInputBase-root": {
      "&.Mui-focused fieldset": {
        border: "#439DD9",
      },
    },
    "&:focus": {
      backgroundColor: "transparent",
      borderRadius: 4,
    },
  },
  purpose: {
    display: "flex",
    justifyContent: "center",
  },
  expenseCategory: {
    display: "flex",
    justifyContent: "center",
  },
  ExpenseName: {
    display: "flex",
    justifyContent: "center",
    borderColor: "#CB444A",
  },
  expenseNameTextField: {
    backgroundColor: "#FCFDFF",
    borderRadius: 4,
  },
  invoiceReciept: {
    display: "flex",
    justifyContent: "center",
  },
  invoiceRecieptDateField: {
    backgroundColor: "#FCFDFF",
    borderRadius: 4,
  },
  projectId: {
    display: "flex",
    justifyContent: "center",
  },
  currency: {
    display: "flex",
    justifyContent: "center",
  },

  expenseHeading: {
    display: "inline-flex",
    margin: "30px 0px 30px 0px",
    width: "478px",
    height: "24px",
  },
  checkBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: "36px",
  },
  saveSubmitButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    marginRight: "35px",
  },
  errorText: {
    color: "#CB444A",
    marginLeft: "14px",
    marginRight: "14px",
    marginTop: 4,
  },
  errorRoot: {
    color: "#CB444A",
    marginLeft: "14px",
    marginRight: "14px",
    marginTop: 4,
  },
}));

const ViewReward = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [purpose, setPurpose] = useState("");
  const [purposeError, setPurposeError] = useState("");
  const [expenseCategoryError, setExpenseCategoryError] = useState("");
  const [expenseNameError, setExpenseNameError] = useState("");
  const [selectDateError, setSelectDateError] = useState("");

  const [currencyError, setCurrencyError] = useState("");
  const [billAmountError, setBillAmountError] = useState("");
  const [claimAmountError, setClaimAmountError] = useState("");
  const [projectError, setProjectError] = useState("");

  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [currency, setCurrency] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [claimAmount, setClaimAmount] = useState("");
  const [project, setproject] = useState([]);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const [dialogToggle, setDialogToggle] = useState(false);

  const [validatonMsg, setValidationMsg] = useState([]);

  const Array = [
    {
      validationType: "purpose",
      value: purpose,
    },

    {
      validationType: "expense Category",
      value: expenseCategory,
    },
    {
      validationType: "expense Name",
      value: expenseName,
    },
    {
      validationType: "Reciept Date",
      value: selectedDate,
    },
    {
      validationType: "Project Id",
      value: project,
    },
    {
      validationType: "Currency",
      value: currency,
    },
    {
      validationType: "Bill Amount",
      value: billAmount,
    },
    {
      validationType: "Claim Amount",
      value: claimAmount,
    },
  ];

  const handleDateChange = (type, date) => {
    console.log("type,", type);
    console.log("date", date);
    setSelectedDate(date);
  };
  const handlePerson = (data) => {
    setproject(data);
  };

  const handleClick = () => {
    const result = Array.map((feild) =>
      FieldValidator(feild.validationType, feild.value)
    );
    setValidationMsg(result);
    let arr = result.map((i) => i.bool);
    let checker = arr.every((element) => element === true);
    if (checker) {
      console.log("purpose", purpose);
      console.log("expenseCategory", expenseCategory);
      console.log("expenseName", expenseName);
      console.log("currency", currency);
      console.log("billAmount", billAmount);
      console.log("claimAmount", claimAmount);
      console.log("selectedDate", selectedDate);
      console.log("project", project);
    }
  };
  console.log("result", validatonMsg);

  const toggleChange = () => {
    setDialogToggle(false);
  };

  useEffect(() => {
    validatonMsg.map((value) => {
      if (value.type === "purpose") {
        setPurposeError(value.message);
      } else if (value.type === "expense Category") {
        setExpenseCategoryError(value.message);
      } else if (value.type === "expense Name") {
        setExpenseNameError(value.message);
      } else if (value.type === "Reciept Date") {
        setSelectDateError(value.message);
      } else if (value.type === "Project Id") {
        setProjectError(value.message);
      } else if (value.type === "Currency") {
        setCurrencyError(value.message);
      } else if (value.type === "Bill Amount") {
        setBillAmountError(value.message);
      } else if (value.type === "Claim Amount") {
        setClaimAmountError(value.message);
      }
    });
  }, [validatonMsg]);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.expenseHeading}>
          <Typography style={{ marginLeft: "32px" }}>
            <ArrowBackIosIcon />
          </Typography>
          <Typography
            style={{
              fontWeight: "600",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "0px",
              textAlign: "left",
              color: "#2B2D30",
            }}
          >
            Expense Report For Jones Ferdinand
          </Typography>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} className={classes.purpose}>
              <Grid item xs={9} sm={9} md={10}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Purpose*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    //   value={age}
                    onChange={(e) => setPurpose(e.target.value)}
                    label="Purpose*"
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
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText className={classes.errorText}>
                    {purpose === "" ? purposeError : ""}
                  </FormHelperText>
                </FormControl>{" "}
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={6} className={classes.expenseCategory}>
              <Grid item xs={9} sm={9} md={10}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    {/* {props.placeholder + (errorState ? "*" : "")} */}
                    Expense Category*
                  </InputLabel>
                  <Select
                    //   classes={{ root: classes.selectRoot }}
                    style={{ borderRadius: 4 }}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue=""
                    label={"Expense Category*"}
                    //   onBlur={(event) => handleOnBlur(event, props.validationType)}
                    //   error={errorState}
                    //   value={value}
                    onChange={(e) => setExpenseCategory(e.target.value)}
                    //   inputProps={{ "data-testid": "state", className: classes.input }}
                    //   label={props.placeholder + (errorState ? "*" : "")}
                    MenuProps={{
                      // classes: { paper: classes.dropdownStyle },
                      // anchorOrigin: {
                      //   vertical: "bottom",
                      //   horizontal: "left",
                      // },
                      // transformOrigin: {
                      //   vertical: "top",
                      //   horizontal: "left",
                      // },
                      getContentAnchorEl: null,
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>asd</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText className={classes.errorText}>
                    {expenseCategory === "" ? expenseCategoryError : ""}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container style={{ marginTop: "30px" }}>
            <Grid item xs={6} sm={6} md={6} className={classes.ExpenseName}>
              <Grid item xs={9} sm={9} md={10}>
                <TextField
                  id="outlined-basic"
                  label="Expense Name*"
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  onChange={(e) => setExpenseName(e.target.value)}
                  helperText={expenseName === "" ? expenseNameError : ""}
                  FormHelperTextProps={{
                    classes: {
                      root: classes.errorRoot,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={6} className={classes.invoiceReciept}>
              <Grid item xs={9} sm={9} md={10}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    inputVariant="outlined"
                    fullWidth
                    className={classes.formControl}
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Invoice/Reciept Date*"
                    value={selectedDate}
                    onChange={handleDateChange}
                    // onChange={handleChange}

                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    helperText={selectedDate === null ? selectDateError : ""}
                    FormHelperTextProps={{
                      classes: {
                        root: classes.errorRoot,
                      },
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid
            container
            style={{
              marginTop: "30px",
              paddingRight: "51px",
              paddingLeft: "51px",
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <ProjectId
                handlePerson={handlePerson}
                projectError={projectError}
              />
              <span>
                <Typography
                  variant="p"
                  style={{ fontSize: "13px" }}
                  className={classes.errorText}
                >
                  {project.length === 0 ? projectError : ""}
                </Typography>
              </span>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container style={{ marginTop: "30px" }}>
            <Grid item xs={4} sm={4} md={4} className={classes.currency}>
              <Grid item xs={9} sm={9} md={9}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Currency*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    //   value={Currency*}
                    //   onChange={handleChange}
                    onChange={(e) => setCurrency(e.target.value)}
                    label="Currency*"
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
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText className={classes.errorText}>
                    {currency === "" ? currencyError : ""}
                  </FormHelperText>
                </FormControl>{" "}
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={4} className={classes.currency}>
              <Grid item xs={9} sm={9} md={9}>
                <TextField
                  style={{ margin: "16px 0 8px 0" }}
                  id="outlined-basic"
                  label="Bill Amount*"
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  onChange={(e) => setBillAmount(e.target.value)}
                  helperText={billAmount === "" ? billAmountError : ""}
                  FormHelperTextProps={{
                    classes: {
                      root: classes.errorRoot,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={4} className={classes.currency}>
              <Grid item xs={9} sm={9} md={9}>
                <TextField
                  style={{ margin: "16px 0 8px 0" }}
                  id="outlined-basic"
                  label="Claim Amount*"
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  onChange={(e) => setClaimAmount(e.target.value)}
                  helperText={claimAmount === "" ? claimAmountError : ""}
                  FormHelperTextProps={{
                    classes: {
                      root: classes.errorRoot,
                    },
                  }}
                />
                <Link
                  // href={value.href}
                  style={{ cursor: "pointer" }}
                  target="_blank"
                  underline="hover"
                  // key={key}
                  onClick={() => {
                    setDialogToggle(true);
                  }}
                >
                  Split Amount
                </Link>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                marginTop: "30px",
                paddingRight: "43px",
                paddingLeft: "43px",
              }}
            >
              <Grid item xs={12} sm={12} md={12}>
                {dialogToggle && (
                  <>
                    <Dialog
                      dialogToggle={dialogToggle}
                      toggleChange={toggleChange}
                      projectid={project}
                    />
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid
            container
            style={{
              marginTop: "30px",
              paddingRight: "47px",
              paddingLeft: "47px",
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <DragDrope />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <div className={classes.checkBox}>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography className={classes.checkBoxText}>
              I hereby declare that all information given above is true as per
              my knowledge
            </Typography>
          </div>
        </Box>
        <Box className={classes.saveSubmitButton}>
          <Button variant="outlined">Save</Button>
          {/* <Button variant="outlined" disabled> */}
          <Button
            variant="outlined"
            onClick={() => {
              handleClick();
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ViewReward;
