import { Route, Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import store from "./redux/store";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard/dashboard";
import HomePage from "./pages/Home/homePage";
import CreateExpenseManagement from "./components/createExpense";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/expense-Management" component={Dashboard} />
            <Route
              exact
              path="/create-Expense-Management"
              component={CreateExpenseManagement}
            />

            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
