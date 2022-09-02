import React from 'react'


// let Display2 = (props) => {
//     console.log(props)
//     return (
//         <div id="helloid">
//             <h1 class="helloclass">
//                 Hello I am {props.firstName} and
//                 lastName is {props.lastName}
//                 {props.children}
//             </h1>
//         </div>
//     )


    //ye react ki important cheej hai kyuki ye sidha sidha html return kar rha hai..means ye internally react ka createElement use kar raha hai...means jo JSX humne likha hai wo internally react ka createElement naam ka function use kar raha hai
    //aur iske wajah se div tag automatically ek node create ho raha hai jo ki hume webpage me console karne ke baad pata chalega..ye kyu hota hai?? kyuki jsx js me convert hoke webpage pe dikhta hai
    //matlab summary me hum ye keh sakte hai ki JSX me react likhne ka benefir hai

    //hum alag tarike se bhi likh sakte hai..jisme ki JSX use n ahi hota..lekin wo likhne me complicated hai

    // return React.createElement('div',null,'<h1>Mai hu Display2 i.e. I am Display2 element</h1>')
    //lekin yeh likhne se element create nahi hoga khali text create hoga
    //aur hume text nahi chahiye..hume lement chahiye i.e.node chahiye jaisa ki same uparwala return kar raha tha

    // return React.createElement('div',null,createElement('h1',null,'Mai hu Display2 i.e. I am Display2 element'))
    //itna sab kuch return me likhne se accha hai pehle wala JSX likho ..complicated nahi hoga

    //ab jaise pehle wale JSX me attributes diye hai waise hi normal method se karne ho to hum aise kar sakte hai

    // return React.createElement
    //     ('div',
    //         { id: "helloid", className: "helloClass" },
    //         React.createElement
    //             ('h1',
    //                 { id: "helloid2", className: "helloClass2" },
    //                 'Mai hu Display2 i.e. I am Display2 element'))
    //yaha pe attributes dete samay is normal wali method me curly braces me class ye attribute nahi le sakte kyui class ek js me keyword hai..uski jagah pe className use karna hoga


    //for destructuring method we can write this
    let Display2 = ({firstName,lastName}) => {
        console.log(firstName,lastName)
        return (
            <div id="helloid">
                <h1 class="helloclass">
                    Hello I am {firstName} and
                    lastName is {lastName}
                    
                </h1>
            </div>
        )
}


export default Display2