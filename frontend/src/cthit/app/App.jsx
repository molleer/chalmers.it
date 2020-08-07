import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Groups from "../use-cases/groups";
import Home from "../use-cases/home";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/groups"} component={Groups} />
                <Route path={"/"} component={Home} />
            </Switch>
        </BrowserRouter>
    );
};
export default App;
