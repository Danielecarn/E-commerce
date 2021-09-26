import { Switch, Route, Router } from "react-router-dom";
import { Initial } from "./pages/initial";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Signup } from "./pages/signup";
import { Cart } from "./pages/cart/cart";

export const Routes = () =>{
    return (
    <Switch>
        <Route path="/" exact component={Initial} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/cart" component ={Cart}/>
    </Switch>
    );
};