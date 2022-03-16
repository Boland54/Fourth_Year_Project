import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import Accidents from './pages/Accidents/Accidents';
import Precaution from './pages/Precaution/Precaution';
import Home from './pages/HomePage';
import Report from './pages/Report';
import Problem from './pages/Problems/Problems';




function App() {
  const { dispatch, token, isLoggedIn } = useContext(AuthContext);

  // get ac token
  useEffect(() => {
    const _appSignging = localStorage.getItem("_appSignging");
    if (_appSignging) {
      const getToken = async () => {
        const res = await axios.post("/api/auth/access", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.ac_token });
      };
      getToken();
    }
  }, [dispatch, isLoggedIn]);

  // get user data
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch({ type: "SIGNING" });
        const res = await axios.get("/api/auth/user", {
          headers: { Authorization: token },
        });
        dispatch({ type: "GET_USER", payload: res.data });
      };
      getUser();
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Switch>
      <Route path='/problems' component={isLoggedIn ? Problem : AuthLayout} />
      <Route path='/' exact component={isLoggedIn ? Home : AuthLayout} />
      <Route path='/report' exact component={isLoggedIn ? Report : AuthLayout} />
          <Route path='/accidents' component={isLoggedIn ? Accidents : AuthLayout} />
          <Route path='/precaution' component={isLoggedIn ? Precaution : AuthLayout} />        
        <Route
          path="/profile"
          exact
          component={isLoggedIn ? ProfileLayout : AuthLayout}
        />
        <Route
          path="/auth/reset-password/:token"
          exact
          component={ResetLayout}
        />
        <Route
          path="/api/auth/activate/:activation_token"
          exact
          component={ActivateLayout}
        />
      </Switch>
    </Router>
  );
}

export default App;
