import React, { Component } from "react";


class BindEvent extends Component {

    constructor() {
        super()
        this.state = {
            msg: "Open the door"
        }

        // this.clickHandler= this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     // console.log(this)       // yaha hume console karne pe pata chalta hai ki this ki value undefined aa rahi hai..this ki value set karne ke liye use reference bhejna padega..to uske liye kuch methods hai..ye hai problem statement
    //     this.setState({
    //         msg: "Close the door"
    //     })

    clickHandler = () => {
        this.setState({
            msg: "Close the door"

        })
    }

    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                {/* <button onClick={this.clickHandler}>Click Me</button> */}
                {/* <button onClick={this.clickHandler()}>Click Me</button>  Gives infinite loop  */}
                {/* <button onClick={()=>this.clickHandler()}>Change</button>     */}
                <button onClick={this.clickHandler}>Click Me</button> 


            </div>
        )
    }

}

export default BindEvent

//Methods to set reference value of this keywprd
//1st method(Event handler me  this ki value set karna=Not Recommended) = onClick event me bind method ko this keyword pass karo usse this ki value global reference set hogi matlab jo humne class likha hai uske state ki value set hogi
//2nd method(Compoenent load hote samay hi this ki value set karna=Recommended )=onClick event me  this keyword pass karo..constructore me.. usse this ki value global reference set hogi matlab jo humne class likha hai uske state ki value set hogi..yaha hum bind method button pe use nahih kar rahe..clickHandler me us ekar rahe hai
//3rd method(Infinite loop me leke jata hai) = Event handler me hi method ko call karo
//4th method(Good Method) = Event Handler me hi onClick event ko callback function de do aur clickHandler function ko wohi pe call karo
//5th method(Best)= clickHandler ko arrow function de do..phir usko event handler me call karne ki zaroorat nahi hai





























// //scope of this keyword

// let info1={
//     firstName:"shubham",
//     lastName:"kamble"
// }

// let info2={
//     firstName :"pravin",
//     lastName:"shelar",
//     display:function(){
//         console.log(this.firstName+this.lastName)

//     }
// }

// let a = info2.display   //yaha pe this keyword ki value a se nikal jati hai..aur a ki value wo set hoti hai jo niche likha hai


// // this keyword ki value nikal jati hai aur niche jo function likha hai wo this keyword ki value set hoti hai

// // let a =function(){
// //     console.log(this.firstName+this.lastName)

// // }


// //hum this keyword ki value manually bhi set kar sakte hai....hume jo chahiye wo
// // a.bind=(info1)()


// //hum call method se bhi this keyword ki value set kar sakte hai
// // a.call(info2)

// // hum apply method se bhi this keyword ki value set kar sakte hai
// //apply method me 2 parameters rehte hai..pehla object name aur dusra array
// // a.apply(info1,[])



