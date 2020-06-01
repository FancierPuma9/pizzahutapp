import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Menu from "./Menu";
import Deals from "./Deals";
import Rewards from "./Rewards";
import Cart from "./Cart";

class Main extends Component
{
    render()
    {
        return(
            <HashRouter>
                <div class="background">
                    <div class="header">
                        <img class="logo" src={require('./logo.png')} alt="Pizza Hut Logo" />                            
                        <NavLink id="cart" to="/Cart"><img class="cart" src={require('./cart.png')} alt="Cart" /></NavLink>
                    </div>

                    <ul>
                        <li><NavLink exact to="/">Menu</NavLink></li>
                        <li><NavLink to="/Deals">Deals</NavLink></li>
                        <li><NavLink to="/Rewards">Rewards</NavLink></li>
                    </ul>
                    
                    <div className="content">
                        <Route exact path="/" component={Menu}/>
                        <Route path="/Deals" component={Deals}/>
                        <Route path="/Rewards" component={Rewards}/>
                        <Route class="cart" path="/Cart" component={Cart}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;