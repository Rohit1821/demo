import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight: 345,
  },
  componentBox1: {
    minWidth: 300,
    minHeight: 300,
  },
  componentBox2: {
    minWidth: 300,
    minHeight: 45,
    backgroundColor: "grey",
  },
  componentNameText: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function HomePageCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const routeName = useLocation().pathname;

  const handleClick = (value) => {
    if (value === "Expenses") {
      history.push("/expense-Management");
    }
  };
  return (
    <Card
      className={classes.root}
      elevation={3}
      onClick={() => handleClick(props.componentName)}
    >
      <CardActionArea className={classes.root}>
        <Box className={classes.componentBox1}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
        </Box>
        <Box className={classes.componentBox2}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.componentNameText}
          >
            {props.componentName}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
