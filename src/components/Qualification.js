import React,{Component} from "react";

class Qualification extends Component{

    constructor(){
        super()
        this.state={
            isGraduated:true
        }
    }

    // render(){
    //     if(this.state.isGraduated){
    //         return (
    //             <h1>Can appear for entrance exam</h1>
    //         )
    //     }
    //     else{
    //         return (
    //             <h1>Can't appear for entrance exam</h1>
    //         )
    //     }
    // }


    // //Cleaner way to write code to avoid repetitive code
    // render(){

    //     let msg 
    //     if(this.state.isGraduated){
    //         msg = <h1>Can appear for entrance exam </h1>
    //     }
    //     else{
    //         msg= <h1>Can't appear for entrance exam</h1>
    //     }

    //     return (
    //         <div> {msg} </div>

    //     )


    // }

    //You can achieve this by using ternary operator

    // render(){
        
    //    return this.state.isGraduated ? <h1>Can appear for entrance exam </h1> : <h1>Can't appear for entrance exam</h1>
    // }


    //shortcircuit--> isme sirf & operator use karte hai
    //ye sirf true condition ke liye likhte hai

    render(){
        return this.state.isGraduated && <h1>Can appear for entrance exam </h1>
    }


}

export default Qualification


//Ternary operator

// let a= 10
// let b=5

// let x1=a> b ? true : false      //yaha pe h1 ka value true aayega kyuki a>b ye true hai