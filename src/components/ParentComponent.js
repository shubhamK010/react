import React ,{Component} from "react";
import ChildComponent  from "./ChildComponent"; //here we are importing child component from parent component


class ParentComponent extends Component {

    constructor(){
        super()
        this.state = {
            parentName:'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
   
    greetParent(paraChild){
        console.log("Good Morning")
        console.log(paraChild)
    }

    render(){
        return (
            <div>
                <ChildComponent handleGreet = {this.greetParent} ></ChildComponent>
            </div>
        )

    }

}

export default ParentComponent
