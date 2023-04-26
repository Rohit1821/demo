import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/style.css";
import { getFormData } from "../redux/Expense/action";
import { Button } from "@material-ui/core";
import history from "../history";
import Header from '../components/subheader'
const UserForm = (props) => {
  const [useremail, setuseremail] = useState(null);
  const Data = useSelector((state) => state.getData.getUserData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    if (Data !== null && Data !== useremail) setuseremail(Data.title);
  }, [useremail]);

  const onhandle = () => {
    history.push("/login");
  };
  return (
    <>
      <div className="main-block">
        <Header/>
        {/* <h1>Welcome ! {useremail}</h1>
        <Button variant="contained" color="primary" onClick={onhandle}>
          Primary
        </Button> */}
      </div>
    </>
  );
};

export default UserForm;
