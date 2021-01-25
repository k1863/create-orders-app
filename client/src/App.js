import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import CreateOrders from "./pages/CreateOrders.jsx";
import OrdersList from "./components/OrdersList";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item fs-1">
              <Link to="/" className="nav-link">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/create" className="nav-link">
                Create Orders
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={OrdersList} />
          <Route path="/create" component={CreateOrders} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
