import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import CustomCard from "../../components/homePageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  container: {
    padding: 27,
  },
  bigBox: {
    justifyContent: "center",
    padding: 10,
  },
  box1: { display: "flex", justifyContent: "center" },
  box2: { display: "flex", justifyContent: "center" },
  text1: { fontSize: 28 },
  text2: {},
}));

const componentArray = [`Expenses`, `TimeSheet`];

export default function Homepage() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className={classes.container}>
      <Box className={classes.bigBox}>
        <Box className={classes.box1}>
          <Typography className={classes.text1}>Hello Colleagues!</Typography>
        </Box>
        <Box className={classes.box2}>
          <Typography className={classes.text2}>
            Please choose an option to proceed
          </Typography>
        </Box>
      </Box>
      <Box>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              {componentArray.map((value) => (
                <Grid key={value} item>
                  <CustomCard componentName={value} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
