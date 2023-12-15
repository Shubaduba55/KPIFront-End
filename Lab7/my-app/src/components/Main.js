import React from "react";

import Header from "./Header";
import Content from "./Content";
import Image from "./Image";

import Goods from "./Goods";

class Main extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            task: true // default task 1
        };  
    this.switchTask = this.switchTask.bind(this);
}
    switchTask(){
        this.setState(prevState => {
            return {task: !prevState.task};
          });

    }
    

    render(){
        return(
        <div>
            
            <button onClick={this.switchTask}
                style={{
                    margin: 10,
                    display: "block"
                }}
            >Switch Task</button>

            {this.state.task 
                ? 
                <div><Header /> <Content /> <Image /></div> 
                : 
                <div> <Goods/> </div>}
        </div>
        );
    }
}

export default Main;