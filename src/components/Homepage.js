import React from "react";
import Blog from "./Blog";
import Login from './Login';
import Reg from './Reg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navheader">
                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/Login'} className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/Signup'} className="nav-link">Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br />
                    <Switch>
                        <Route exact path='/Login' component={Login} />
                        <Route path='/Signup' component={Reg} />
                    </Switch>
                    <Switch>
                        <Route path='/blog' component={Blog} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Homepage;
