


console.log("这是 react  js 部分 ");



import React ,{Component}  from "react";
import ReactDOM from "react-dom";

// api 
// 1. 创建组件   class 
// 2. 渲染组件 成 真实 DOM    ReactDOM.render

import Demo from "./components/demo.jsx";
import {Index} from "./components/index.jsx";
import IndexRouter from "./route"

class App extends React.Component{
    render(){
        return (
            <div>
                <IndexRouter></IndexRouter>
            </div>
        )
    }
}



// ReactDOM.render(组件,根节点)
ReactDOM.render(
    <App></App> ,
    document.getElementById("app")
)




// 构造函数
class Person {
    constructor(){

    }
}

// ES6 继承 
class Student extends Person{
    constructor(){
        super();  // 继承父类 
    }
}


function User(){

}
