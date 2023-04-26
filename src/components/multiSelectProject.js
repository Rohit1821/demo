/* eslint-disable no-use-before-define */

import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesProjectId({ handlePerson }) {
  const [personName, setPersonName] = React.useState([]);
  const classes = useStyles();

  const handleChange = (event, value) => {
    console.log("value", value);

    setPersonName(value);
  };
  console.log("setpersonnaem", personName);
  useEffect(() => {
    handlePerson(personName);
  }, [personName]);
  const handleTags = () => {
    return (
      <div className={classes.chips}>
        {personName.map((value) => {
          return (
            <>
              <Chip
                key={value}
                label={value.title}
                className={classes.chip}
                clickable
                onDelete={() => {
                  handleDelete(value);
                }}
                deleteIcon={<CloseIcon />}
              />
            </>
          );
        })}
      </div>
    );
  };

  const handleDelete = (name) => {
    const existingToggles = [...personName];
    console.log(existingToggles);
    setPersonName(
      existingToggles.filter((value) => value.title !== name.title)
    );
  };

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      value={personName}
      disableCloseOnSelect
      className={classes.formControl}
      onChange={handleChange}
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            // icon={icon}
            // checkedIcon={checkedIcon}
            style={{ backgroundColor: "#FCFDFF", borderRadius: 4 }}
            // checked={handleCheck(selected,option)}
            checked={selected}
          />
          <p>{option.title}</p>
        </React.Fragment>
      )}
      renderTags={(value) => handleTags(value)}
      // style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Project ID*"
          placeholder="Enter Project ID to search"
          // fullWidth
        />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  {
    projectID: "IT-PROJ-0021",
    title: "The Shawshank Redemption",
    year: 1994,
  },
  { projectID: "IT-PROJ-0022", title: "The Godfather", year: 1972 },
  {
    projectID: "IT-PROJ-0023",
    title: "The Godfather: Part II",
    year: 1974,
  },
  { projectID: "IT-PROJ-0024", title: "The Dark Knight", year: 2008 },
  { projectID: "IT-PROJ-0010", title: "12 Angry Men", year: 1957 },
  { projectID: "IT-PROJ-0011", title: "Schindler's List", year: 1993 },
  { projectID: "IT-PROJ-0012", title: "Pulp Fiction", year: 1994 },
  {
    projectID: "IT-PROJ-0013",
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  {
    projectID: "IT-PROJ-0014",
    title: "The Good, the Bad and the Ugly",
    year: 1966,
  },
  { projectID: "IT-PROJ-0015", title: "Fight Club", year: 1999 },
  {
    projectID: "IT-PROJ-0016",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    projectID: "IT-PROJ-0017",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { projectID: "IT-PROJ-0018", title: "Forrest Gump", year: 1994 },
  { projectID: "IT-PROJ-0019", title: "Inception", year: 2010 },
  {
    projectID: "IT-PROJ-0020",
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
];
