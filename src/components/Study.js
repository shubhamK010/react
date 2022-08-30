import React from "react";

const Study= (props) =>{
    console.log(props)  //props object hai
       
    return (
        <h1>Study {props.name}</h1>

    )

    // return React.createElement('h1','null','Study Harder')
    // return React.createElement('h1',{id:'discipline'},'Study Harder') //jo second parameter humne yaha pe use kiya hai ...wo humara attribute hai.i.e.id yaha huamra attribute hai

}

export default Study