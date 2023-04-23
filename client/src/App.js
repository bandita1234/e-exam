import React from "react";
import Nav from "./components/common/Nav";
import Home from "./components/blog/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/common/Alert";
import Exam from "./components/exam/Exam";
import AddNote from "./components/blog/AddNote";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Profile from "./components/profile/Profile";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { alertMiddleware } from "./state/index";
import "./css/App.css";
import "./css/auth.css";
import "./css/blog.css";
import "./css/navbar.css";
import "./css/profile.css";
import "./css/home.css";
import ExamState from "./state/ExamState";

function App() {
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(alertMiddleware, dispatch);
  return (
    <div className="app">
      <ExamState>
        <Router>
          <Nav />
          <div className="hero-box">
            <Alert />
            <Switch>
              <Route exact path="/openforum">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/exam">
                <Exam />
              </Route>
              <Route exact path="/add-note">
                <AddNote />
              </Route>
              <Route exact path="/auth/login">
                <Login />
              </Route>
              <Route exact path="/auth/signup">
                <SignUp />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          </div>
        </Router>
      </ExamState>
    </div>
  );
}

export default App;
