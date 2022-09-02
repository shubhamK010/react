import React,{Component} from "react";

class News extends Component{
    constructor(){
        super()
        this.state={
            msg:"India wins against Pak"
        }
    }

    ChangeMessage(){
        
        // this.state={
        //     msg:"Pak always lose against India"
        // }
        // console.log(this.state)
        // //ye sab to ui ke console me to dikhega lekin ui ke page pe display nahi hoga..uske liye laag niche code likh rahe hai
        // //solution to this problem statement is that you have to write stateSet method

        this.setState({
            msg:"Pak always lose against India"
        })
        //ab isse ui pe bhi change hoga
    }

    render(){
        return(
            <div>

                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.ChangeMessage()}>Change Button</button>
            </div>

            
        )
        
    }
}
export default News
