
// 基于原生Js 编写事件 
// addEventListener("click",fn,true/false);  false/true 冒泡/捕获   默认false 冒泡 
// onclick  onchange  onfocus
// <p onclick="get()"></p>

// jquery 
// $("div").on("click")    $("div").off("click")
// $('div').bind('click')  绑定   $('div').unbind('click')

// 事件委托  把事件绑定到父元素上   子元素触发事件   通过事件冒泡  让父元素代替子元素执行冒泡的事件   
// $("div").on("click",childnode,fn);
// $("div").delegate(childnode,'click',fn)


// vue
// v-on:click = "get()"
// @input = "input($event)"  $event 事件对象 


// react 绑定事件  驼峰命名

// onClick
// onChange
// onInput
// onMouseMove
// onMouseDown
// onMouseUp
// onTouchStart
// onTouchMove
// onTouchEnd
// onKeyPress
// onKeyDown
// onKeyUp

// 绑定事件 
// 1. 全局变量 / 外部函数
// 2. 组件内部自定义函数
// 3. 原型链挂载 

let count = 1901;
const action = {
    fnA(){
        alert("我不会阻止事件冒泡")
    },
    fnB(e){
        var e = e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
        alert("我一定要阻止事件冒泡");
    }
}

import {event} from "@/utils/commoncss";

// extends 继承 
export default class EventDemo extends Component {

    constructor(){
        super();   // 继承得到父类 的 constructor 超类 
        this.add  =   this.add.bind(this);    // bind 改变 this 指向 
    }

    handclick=()=>{
        
    }

    add(){
        console.log(this);
        console.log("这是react  的自定义事件... ");
        count += 10;
        console.log(count);
    }

    getEvent(e){
        console.log(e.target.innerHTML)
    }

    getValue(e){
        console.log(e.target.value);
    }

    move(){
        // react 组件 创建  自定义函数  的this 没有任何指向 undefine 
        console.log(this);
        console.log("这是 鼠标滑动 事件 ")
    }

    render(){
        return (
            <div onTouchStart={(event)=>this.js.touch(event)}>
                <h2 style={{color:'deeppink'}} onClick={()=>{console.log('这是 react 事件 ')}}> react 事件书写 events </h2>
                <h2 onClick={this.add}> count == {count } </h2>
                <h2 onClick={this.getEvent}> react 事件 获取事件 对象 event </h2>
                <p><input type="text" onChange={this.getValue}/></p>

                <div onClick={event.todoSome} onMouseMove={()=>this.move()}>
                    <h2 onClick={action.fnA}> 全局 事件 绑定  不会阻止事件冒泡 </h2>
                    <h2 onClick={action.fnB}> 全局 事件 绑定   阻止事件冒泡 </h2>
                </div>
            </div>
        )
    }
}

// 箭头函数 作用  ()=>{}  改变 this 指向  
// 1. 箭头函数 本身没有 this , 借用箭头函数外部代码块的 this 
// 2.  箭头函数的this 跟 函数 执行的环境this 无关 ,跟函数定义 的this 有关 

EventDemo.prototype.js = {
    touch(e){
        console.log(e);
        console.log(e.touches[0].clientX);
    }
}
