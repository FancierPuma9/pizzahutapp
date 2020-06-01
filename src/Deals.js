import React, {Component} from "react";

class Deals extends Component
{
    render()
    {
        return(
            <div class="DealsPage">
                <div class="deals" id="twofor12"><p>2 for $12</p></div>
                <div class="deals" id="twofor7"><p>Pick 2 for $7 each</p></div>
                <div class="deals" id="ff425"><p>Feed the Family for $25</p></div>
                <div class="deals" id="LD"><p>Local Deals</p></div>
            </div>
        );
    }
}

export default Deals;