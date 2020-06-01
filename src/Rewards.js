import React, {Component} from "react";

class Rewards extends Component
{
    render()
    {
        return(
            <div class="RewardsPage">
                <p class="description">Please login to see your rewards:</p>

                <div class="login"><p>Email: </p><input type="text"></input></div>
                <div class="login"><p>Password: </p><input type="text"></input></div>
                <div class="button">Login</div>
            </div>
        );
    }
}

export default Rewards;