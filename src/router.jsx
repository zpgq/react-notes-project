import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./Layout"

const router = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Layout} />
            </Switch>
        </Router>
    )
}

export default router();