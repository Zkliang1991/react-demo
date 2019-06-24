

// props  属性  父组件给 子组件 传递 的数据 


/*
1. react 数据传递载体  props 属性  state 状态  组件之间数据交互  

2. props
a.  props 默认从组件外部（父组件）传入,props 也能在组件内部初始化定义 getDefaultProps 
b.  组件内部 通过生命周期钩子函数 getDefaultProps (已废弃 )   App.defaultProps = {}
c.  props 一般不允许被修改   props 只用来传递数据
d.  props 接收  对象 常量 函数  数组  
e.  props 在组件内部 通过 this.props 来获取  key-value 
*/ 

    // PropTypes  校验Props 
    // optionalArray: PropTypes.array,
    // optionalBool: PropTypes.bool,
    // optionalFunc: PropTypes.func,
    // optionalNumber: PropTypes.number,
    // optionalObject: PropTypes.object,
    // optionalString: PropTypes.string,
    // optionalSymbol: PropTypes.symbol,
    
    // 校验 props 接收正确的格式类型的数据 

import PropTypes from "prop-types";
import MyBtn from "./btn";

export default class Prop1 extends Component{

    handle=()=>{
        console.log(this);
    }

    static defaultProps = {
        msg:"are you ok"
    }

    changeMsg=()=>{
        this.props.msg = "msg is changes..."
    }

    login(){
        console.log('login');
    }
    render(){
        console.log(this.props);
        const {
            word,
            names,
            arr,
            msg,
            people,
            nickname
        } = this.props;
        return (
            <div>
                <h2 onClick={this.handle}> react 组件交互  数据传递  props === {nickname} </h2>
                <h2 onClick={this.changeMsg}> props == {word} - {names} - {msg}</h2>
                {
                    arr.map((item,i)=>{
                        return (
                            <p key={i}>{item}==={i}</p>
                        )
                    })
                }

                <MyBtn txt="点击注册" className="btn" onClick={this.login} disabled={true} ></MyBtn>
                <MyBtn txt="点击登录" style={{border:'3px dotted green'}}></MyBtn>

            </div>
        )
    }
}

// 静态属性 
Prop1.defaultProps = {
    type:true,
    msg:"学会react "
}
// 校验 props 类型 
Prop1.propTypes = {
    type:PropTypes.bool,
    msg:PropTypes.string.isRequired,
    word:PropTypes.number.isRequired
}

// ES5
function Person(age,name){
    this.age = age;
    this.name = name;
}
Person.hobby = ["LoL","NBA"];

Person.prototype.say = function(){

}

// ES6
class Student{
    constructor(age,name){
        this.name = name;
        this.age = age;
    }

    static hobby = ["Read","Smile"]

    say(){  // prototype 

    }

    read(){

    }
}
Student.hobby = []