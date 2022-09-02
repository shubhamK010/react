import React, { Component } from "react";

class NewState extends Component {

    constructor() {     //component ki koi cheej use karni hai to constructor likh ke super call karna zaroori hai
        super() //compnent se jo bhi value aa rahi hai wo hum props ko pass kar rahe hai
        this.state = {
            msg: "Hello"                //jaha se hum is component ko call karenge waha se value is message me pehle aayegi..aur wo msg ki value me set hoga

        }
    }
    updateState() {

        this.setState({
            msg:
                'minskole welcomes you !!'
        })
    }
    render() {
        return (
            <div>

                <h1>{this.state.msg}</h1>
                <button onClick={()=>{
                    this.updateState()
                }}>changeText</button>



            </div>
        )
    }
}

export default NewState