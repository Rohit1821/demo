import React, { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core";

import SideBarDrawer from "../../components/navBar";
const Dashboard = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const AdminInfo = useSelector((state) => state.getData);
//   const location = useLocation();
  
  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <SideBarDrawer />
    </div>
  );
};

export default Dashboard;
