import React, { Component } from "react";

//hunt = shikar karna
//agar ajax ata hai to hi yeh code samjhega
class Hunter extends Component {
    constructor() {
        super()
        this.state = {
            hunt: 0
        }
    }
    //mujhe hunt ki value ek ek se badhani hai i.e. increment karni hai to niche wala code likhta hu

    increment() {
        // this.state.hunt=this.state.hunt+1
        // console.log(this.state.hunt)
        //ye code likhne se ui ke console me to change dikhega lekin ui ke page pe change nahi dikhega..uske liye setState likhna hota hai


        //Async Problem Staement

        // this.setState({
        //     hunt: this.state.hunt+1
        //     //ye code likhne se ui ke page pe bhi change hoga 
        // })
        // console.log(this.state.hunt)  
        //ab mera aur ek problem statement emerge ho raha hai kyuki ui ke console me hunt ki value 0 aa rahi hai aur ui ke page pe 1 aa rahi hai...ye async call ke wajah se ho rhi hai...uske liye code likhna hoga
        //matalb ui ke page jo hunt ka numebr hai wo pehle increase ho raha hai aur uske ke baad me console me jo hunt ka number hai wo increase ho raha hai
        //matalb line no 23 pehle execute ho rahi hai..uske baad line no 20 execute ho rahi hai
        //iska solution yeh hai ki .tehn ki jaise hi same jo line baad me chaihye usko aage likhe

        //Solution to async problem statement..iske wajah se jo ui ke page pe number increment hoke ayega wo hi console me dikhega
        //means line 35 yaha resolve ki condition hai..line no 37 pe jo callnack function lagaya hai wo .then block hai...aur line no 38 ek dusri condition hai jo ki baad me fulfill hogi
        // this.setState({
        //     hunt: this.state.hunt+1

        // },()=>{
        //     console.log(this.state.hunt)  

        // })


        //solution= sab call ek sathi hi ja rahe the uske liye solution

        this.setState((prevState) => ({
            hunt: prevState.hunt + 1
        }

        ))


    }
    //mujhe ab 5 se incremnet karna hai..uske liye function 5 baar call karna padega

    incrementbyFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        //ye 5 baar call karne se bhi 5 se increment nahi ho raha..sab 5 call ek sath hi ja rahe hai
        //Problem statement= previous state ko sath me call nahi leke ja rahe..aur sabka output 1 hi aa raha hai
        //solution= i have to maintain previous state

    }




    render() {
        return (
            <div>
                <h1>{this.state.hunt}</h1>
                <button onClick={() => this.incrementbyFive()}>Add One</button>
            </div>
        )
    }
}
export default Hunter