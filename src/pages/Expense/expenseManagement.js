import React, { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import CreateExpense from "../../components/createExpense";
import ExpenseLanding from './landingPage'
const Dashboard = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* <CreateExpense /> */}
      <ExpenseLanding/>
    </div>
  );
};

export default Dashboard;
