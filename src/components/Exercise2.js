import React,{Component} from "react";     

class Exercise2 extends Component{       

    render (){

        return <h1>My firstName is { this.props.firstName} and lastName is {this.props.lastName} </h1>
    }

}    

export default  Exercise2; 

//ek hi component ko multiple time use karna hai to mai props use kar sakta hu i.e.properties
//simple language me samjhna ho to function ko parameters bhejna matalb prop jaisa kaam hota hai



//class me agar props ki value read karni hai to this keywprd use karte hai jiska scope component rehta hai

//For General Understanding


//Cocncept 1
// function add(){
//     console.log(x+y)
// }
// add(10,20)      //yaha hum jaise function ko call karke usko parameters bhej rahe hai waise hi props ka concept hai



//Concept 2
function add(){
    let x= 10
    let y =20
    console.log(x+y)
}


//yaha pe humne function ko call nahi kiya ..function ke andar hi variables ki value assign ki hai i.e. parameters ki value assogn ki hai 
//yaha humne function ke andar hi state maintain ki hai

//IMP
// jo hum state maintain karte hai wo component me hi karte hai
//aur hum props jo bhejte hai wo UI se bhejte hai i.e. browser se bhejte hai


