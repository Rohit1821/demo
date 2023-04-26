import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import OutsideClickHandler from "react-outside-click-handler";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    // maxWidth: 300,
    width: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver",
  "Van Henry",
  "April Tucker djksdmfk",
  "Ralph Hubbard hjhjj lldajhdnwek",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "xelly Snyder",
  "yelly Snyder",
  "zelly Snyder",
  "belly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  console.log("value", personName);
  const handleDelete = (name) => {
    const existingToggles = [...personName];
    console.log(existingToggles);
    console.info("You clicked the delete icon.", name);
    setPersonName(existingToggles.filter((value) => value !== name));
  };

  const handleName = (value) => {
    if (value) {
      const initArray = value.split(" ");
      let initial;
      if (initArray.length === 1) {
        initial = initArray[0][0];
      } else {
        initial = initArray[0][0] + initArray[initArray.length - 1].slice(0, 1);
      }
      return initial.toUpperCase();
    }
  };

  const handlevalue = () => {
    const dummy = [...personName.slice(0, 11)];
    return (
      <div className={classes.chips}>
        {dummy.map((value) => {
          const color = Math.random().toString(16).substr(-6);
          return (
            <>
              <Chip
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: "#" + color,
                      color: "white",
                    }}
                  >
                    {handleName(value)}
                  </Avatar>
                }
                key={value}
                label={value}
                className={classes.chip}
                clickable
                onDelete={() => {
                  handleDelete(value);
                }}
                onClick={(e) => e.stopPropagation()}
                deleteIcon={<CloseIcon />}
              />
            </>
          );
        })}
        {personName.length > 11 && <div>+{`${personName.length - 11}`}</div>}
      </div>
    );
  };

  return (
    <div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setToggle(false);
        }}
      >
        <FormControl
          variant="outlined"
          className={classes.formControl}
          onClick={() => setToggle(true)}
        >
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            label="Tag"
            id="demo-mutiple-checkbox"
            multiple
            autoWidth
            value={personName}
            onChange={handleChange}
            open={toggle}
            // renderValue={(selected) => (

            //   <div className={classes.chips}>
            //     {selected.map((value) => {
            //       const color = Math.random().toString(16).substr(-6);
            //       return (
            //         <>
            //           <Chip
            //             avatar={
            //               <Avatar
            //                 style={{
            //                   backgroundColor: "#" + color,
            //                   color: "white",
            //                 }}
            //               >
            //                 {handleName(value)}
            //               </Avatar>
            //             }
            //             key={value}
            //             label={value}
            //             className={classes.chip}
            //             clickable
            //             onDelete={() => {
            //               handleDelete(value);
            //             }}
            //             onClick={(e) => e.stopPropagation()}
            //             deleteIcon={<CloseIcon />}
            //           />
            //         </>
            //       );
            //     })}
            //     <div>hdfnkdmvldml</div>
            //   </div>
            // )}
            renderValue={() => handlevalue()}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </OutsideClickHandler>
    </div>
  );
}
