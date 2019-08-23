import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { About, Event, Blog, Jobs,StudentPage } from "./index";
import { Home} from "./index";
import AdminApp from "../containers/admin/App";

function NotFound() {
    return (
        <div>
            <h1>404 - NOT FOUND</h1>
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Root-App">
                <Switch>
                    <Route path="/admin" component={AdminApp} />
                    <Route exact path="/" component={() => <Home page="students" />}  />
                    <Route path="/students" component={() => <Home page="students" />} />
                    <Route path="/studentpage" component={() => <StudentPage page="studentpage" />} />
                    <Route path="/employer" component={() => <Home page="employer" />} />
                    <Route path="/about-us" component={() => <About page="students" />} />
                    <Route path="/about" component={() => <About page="employer" />} />
                    <Route path="/events" component={() => <Event page="students" />} />
                    <Route path="/jobs" component={() => <Jobs page="students" />} />
                    <Route path="/blog" component={() => <Blog page="students" />} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
