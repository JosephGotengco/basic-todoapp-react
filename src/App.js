import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import ThemeSwitcher from "./components/ThemeSwitcher";

// Route component tells which component to display based on the path
function App() {
    return (
        <div className="todoapp stack-large">
            <div className="nav-group">
                <Navbar />
                <ThemeSwitcher />
            </div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route component={Error} />
            </Switch>
        </div>
    );
}

export default App;
