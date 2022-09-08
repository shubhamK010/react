import React from "react";

let ClickFunction = ()=>{

    function clickHandler(){
        console.log('Button is clicked')
    }

    return (

        //ye jsx hai
        <div>
            <h1>Breakfast</h1>
            <button onClick={clickHandler}>Click Button</button>

        </div>
    )
}
export default ClickFunction