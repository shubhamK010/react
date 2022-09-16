import React from "react";


let ChildComponent = (props)=>{
    return (
        <div>
            <button onClick={()=>props.handleGreet('parameter from child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

//flow of process to understand

// parentComponent (class component) --- load --- App.js
// childComponent (function component) ---- load -- ParentComponent
// props ---- function