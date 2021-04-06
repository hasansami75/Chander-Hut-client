import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import Authority from "./components/Authority/Authority"
import ManageData from "./components/ManageData/ManageData";
import CheckOut from "./components/CheckOut/CheckOut";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import OrderDetails from "./components/OrderDetails/OrderDetails";

//context api for sending data
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    price : '',
    name : '' , 
    email : '',
    productName : '',
    productWeight : '',
    productImg : ''
  });
  console.log(loggedInUser);
  // const [productDetails , setProductDetails] = useState({
  //   price : ''})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/authority">
            <Authority />
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/manage">
            <ManageData/>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder/>
          </Route>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut/>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <OrderDetails />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
