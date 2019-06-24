




import Head from "./head"
import {Foot} from "./foot"
import CssDemo from "./cssDemo"
import EventDemo from "./eventDemo"
import Prop1 from "./props_1"
import State1 from "./state_1"
import State2 from "./state_2"
import Props2 from "./props_2"
import LifeDemo from "./lifeDemo"
import ContextDemo from "./contextDemo"
import DataDemo from "./data"
import Banner from "./banner"
import TodoList1 from "./todoList_1"
import TodoList2 from "./todoList_2"
import TodoList3 from "./todoList_3"



const arr = ["天道酬勤","勤勤恳恳","肯为人先","先人一步","步步高升"];
const msg = "wuhan1901 务必精通所有框架 ";
const person = {
    age:28,
    nickname:"zuozuomu",
    say(){

    }
}
export class Index extends Component{
    render(){
        return (
            <div>
                <h2>index - index </h2>
                <Head></Head>
                {/* <Home></Home>
                <Menu></Menu>
                <Swipe id="qianfeng" name="leson" ></Swipe> */}
                
                <hr/>
                <TodoList3 msg={msg} people={person}   names="leson" word= {1901 }  arr={arr}  />
                <hr/>
                <Foot></Foot>
            </div>
        )
    }
}

export class Home extends React.Component{

    todoSome(){

    }

    render(){
        return (
            <div>
                <h2> home -home -home </h2>
            </div>
        )
    }
}

const Menu = ()=>{
    return (
        <div>
            <h2>menu - menu - menu  </h2>
        </div>
    )
}

const Swipe = ({id,name})=> (
    <div>
        <h2> 
            swipe - swipe -swipe -  {id} -- {name}
        </h2>
    </div>
)

// ()=>5
// ()=>{ return 5}




//  创建组件  component 

//  组件即将一段或几段完成各自功能的代码段封装为一个或几个独立的部分

//  每个组件 能完成独立的功能的，都是独立的部分
//  a. React.createClass   老版本   ES5  废弃 
//  b. Reac.Component  新版本   ES6   class 类  extends 继承  React.Component 父类 
//  c. 无状态组件    stateLess component   函数式组件   纯函数组件 

//  组件名首字母必须大写    任何组件都只有一个顶层标签  

//  render 组件生命周期钩子函数   把虚拟DOM 读取出JS内存   然后等待渲染成真实DOM 

//  生命周期阶段  mount(载入)  update(更新) unmount(销毁)

//  自定义函数  handleClick  onClick={this.handleClick}

//  数据传递载体  组件通信  props(属性)   state(状态 this)

// const Home = React.createClass({
//     render(){
//         return (
//             <div>
//                 <h2>home- home -home </h2>
//             </div>
//         )
//     }
// })