import React from "react";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProjectState from "./context/proyectos/ProjectState";
import TaskState from "./context/task/taskState";
import AlertState from "./context/alerts/alertState";
import AuthState from "./context/authentication/authState";
import tokenAuth from "./config/token";

const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token)
}

function App() {
  console.log(process.env.REACT_APP_BACKEN_URL)
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/nueva-cuenta' component={NewAccount} />
                <Route exact path='/proyectos' component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
