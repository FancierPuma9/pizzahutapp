import React, {Component} from "react";

class Menu extends Component
{
    render()
    {
        return(
            <div class="page">
                <div class="menuImg"></div>
                <div>
                    <ul class="MenuItems">
                        <li><p id="tx">Pizza</p>        <p id="ar">></p> </li>
                        <li><p id="tx">Wings</p>        <p id="ar">></p> </li>
                        <li><p id="tx">Sides</p>        <p id="ar">></p> </li>
                        <li><p id="tx">Pasta</p>        <p id="ar">></p> </li>
                        <li><p id="tx">Desserts</p>     <p id="ar">></p> </li>
                        <li><p id="tx">Drinks</p>       <p id="ar">></p> </li>
                        <li><p id="tx">Sandwiches</p>   <p id="ar">></p> </li>
                        <li><p id="tx">Sauces</p>       <p id="ar">></p> </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;