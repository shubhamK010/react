import React, { Component } from "react";

class ClickClass extends Component {

    clickHandler() {
        console.log('Button is clicked')
    }

    render() {

        return (

            <div>

                <button onClick={this.clickHandler}>Change me</button>
            </div>
        )
    }
}
export default ClickClass
