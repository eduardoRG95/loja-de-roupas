import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loja from "./loja";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Loja} />
            </Switch>
        </BrowserRouter>
    );
}