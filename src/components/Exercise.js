import React,{Component} from "react";      //jab hum class based component likhte hai to hume import me comma karke component bhi likhna padta hai

//ye hai class compnent
class Exercise extends Component{       //hum yaha extend likhte hai kyuki Exercise is naam ke class me react ke component ki properties aur methods use karne hai isliye hum extend likhte hai

    // render (){

    //     return <h1>{this.props.name}</h1>
    // }

    //for destructuring we can write like this
     render (){
        let {firstName,lastName}= this.props
        return <h1>{firstName} {lastName}</h1>
    }
    

}    

export default  Exercise; 
