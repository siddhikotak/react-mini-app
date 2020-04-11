import React from "react";
import "./App.css";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DialogContext } from "./Contexts/DialogContext";
import { SnackbarContext } from "./Contexts/SnackbarContext"

function App() {
  const [snackbar, setSnackbar] = React.useState(null);
  const [dialog, setDialog] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
          <DialogContext.Provider value={{ dialog, setDialog }}>
            <Switch>
              <Route exact path="/" component={AdminLogin} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </DialogContext.Provider>
        </SnackbarContext.Provider>
      </Router>
    </div>
  );
}

export default App;