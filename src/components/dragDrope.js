import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import CloseIcon from "@material-ui/icons/Close";
import "../css/dragDrope.css";
// import ImageConfig from "../../../config/imageConfig";
import { Box, Button, Typography, Grid, Paper, Chip } from "@material-ui/core";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const useStyles = makeStyles((theme) => ({
  btnBox: {
    padding: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chip: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const DropFileInput = (props) => {
  const classes = useStyles();
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <>
      <div className="drop-file-container">
        <Paper className={classes.paper}>
          <div
            ref={wrapperRef}
            className="drop-file-input"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className="drop-file-input__label">
              <BackupOutlinedIcon style={{ fontSize: 40 }} color="disabled" />
              <Typography>Upload the Reciepts/Invoice</Typography>
              <Box className={classes.btnBox}>
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </Box>
              <p className="drop-file-input-label-validationText">
                Only JPEG, PNG and PDF allowed with maximum size of less than 10
                MB
              </p>
            </div>
            <input type="file" value="" onChange={onFileDrop} />
          </div>
        </Paper>
      </div>

      <div className="drop-file-preview-container">
        {fileList.length > 0 ? (
          <Grid container spacing={3}>
            {fileList.map((item, index) => (
              <Grid item xs={1} sm={3}>
                <Chip
                  key={index}
                  //   icon={<ImageConfig />}
                  label={item.name}
                  className={classes.chip}
                  clickable
                  onDelete={() => {
                    fileRemove(item);
                  }}
                  onClick={(e) => handleClick()}
                  deleteIcon={<CloseIcon />}
                />
              </Grid>
            ))}
          </Grid>
        ) : // <div className="drop-file-preview">
        //   {fileList.map((item, index) => (
        //     <div key={index} className="drop-file-preview__item">
        //       <img
        //         src={
        //           ImageConfig[item.type.split("/")[1]] ||
        //           ImageConfig["default"]
        //         }
        //         alt=""
        //       />
        //       <div className="drop-file-preview__item__info">
        //         <p>{item.name}</p>
        //         <p>{item.size}B</p>
        //       </div>
        //       <span
        //         className="drop-file-preview__item__del"
        //         onClick={() => fileRemove(item)}
        //       >
        //         x
        //       </span>
        //     </div>
        //   ))}
        // </div>
        null}
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
