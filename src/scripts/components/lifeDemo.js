
/*
 react 组件的生命周期
 含义   组件从初始化渲染到被移除或者销毁的过程  成为组件的生命周期

 1. 每个组件都有生命周期
 2. react 通过组件的生命周期钩子函数来管理 组件
 3. 系统 某些状态和参数发生改变的时候，系统立马去通知 对应处理的函数叫做钩子函数
 hooks 钩子函数  允许在特定的时期添加用户自己的代码  不同的阶段添加自己的逻辑代码

 react 组件的生命周期 分为三个阶段 
 1.mount  组件的初始化  从虚拟DOM 渲染成为真实DOM 的过程   1
 2.update   组件的数据变化   组件的state 更新 导致二次渲染的过程   n   
 3.unmount  组件销毁   组件因为路由切换而销毁 (浏览器的垃圾回收机制 )     1  

 mounted 组件载入阶段  (钩子函数)
 1.getDefaultProps   设置组件默认的props   废弃
 2.getInitialState   设置组件默认的state   废弃
 3.componentWillMount  在jsx被渲染到页面之前被调用
 4.render   渲染函数是react中默认的函数
 5.componentDidMount   jsx被渲染到页面后被调用

*/ 

let count = 0;

// state 改变 
export default class LifeDemo extends Component{

    log(msg){
        console.log(`#### ${++count} ------------ ${msg}`)
    }

    state = {
        word:"are you ok?",
        num:1000,
        disabled:true
    }

    componentWillMount(){
        // 组件渲染成真实DOM 之前 虚拟DOM
        // 请求 ajax 或者 打印 日志 
        this.log('componentWillMount 组件渲染成真实DOM 之前');
        console.log(this.refs.one);
    }

    shouldComponentUpdate(nextProps,nextState){
        this.log("shouldComponentUpdate" );
        console.log(nextState)
        console.log(this.state);
        return true
    }
    componentWillUpdate(){
        this.log("componentWillUpdate" );
    }

    componentDidUpdate(){
        this.log("componentDidUpdate")
    }

    getWord=()=>{
        this.setState({
            word:this.refs.two.value
        })
    }

    check=()=>{
        var mobile = this.refs.mobile.value;
        var password = this.refs.password.value;
        console.log(mobile,password);
        // g
        // i   
        // \. 转译   ^ $   |  
        // \d 数字  \w   a-zA-Z
        var telReg =  /^1(3|5|7|8|9)\d{9}$/ 
        var pwdReg =  new RegExp("^[a-zA-Z0-9]{6,12}$");
        var flag = telReg.test(mobile)&&pwdReg.test(password);
        this.setState({
            disabled:!flag
        })
        // if(telReg.test(mobile)&&pwdReg.test(password)){
        //     this.setState({
        //         disabled:false,
        //     })
        // }else{
        //     this.setState({
        //         disabled:true,
        //     })
        // }
    }

    render(){
        this.log("render 虚拟DOM 正在渲染 render ")
        let {
            word,
            num
        } = this.state;
        return (
            <div>
                <h2 ref="one"> react 组件 的  生命 周期  </h2>
                <h2> state = {word} --- {num }</h2>
                <p><input type="text" ref="two" onChange={this.getWord} /></p>
                <button onClick={()=>this.setState({num:++num})} > change num </button>
                
                <div>
                    <p>手机号:<input type="text" placeholder="请输入手机号" ref="mobile" onChange={this.check} /></p>
                    <p>密码: <input type="password" placeholder="请输入密码" ref="password"  onChange={this.check} /></p>
                    <button disabled={this.state.disabled} > 登录 </button>
                </div>
                <hr/>
                <Child
                num={num}
                word={word}
                logger={this.log}
                ></Child>
            </div>
        )
    }

    componentDidMount(){
        this.log("componentDidMount 虚拟DOM 已经渲染成 真实DOM  ")
        // 一般是 进行 插件的实例化  new Swiper()
        this.refs.one.style.color = "red";
    }
}



/*
update 组件数据更新阶段   组件修改 state  组件接收的props发送改变  都会进入 update 阶段 
1. componentWillReceiveProps(nextProps)  接收变化的props
2. shouldComponentUpdate  询问是否更新  true 更新 false 不更新 
3. componentWillUpdate   组件即将更新  
4. render   组件开始二次渲染  update
5. componentDidUpdate   组件更新渲染数据完毕 

*/ 


// props 改变 
class Child extends Component{
    componentWillReceiveProps(nextProps){   // 只有props 修改才能进来 
        this.props.logger("componentWillReceiveProps props 修改才能进来");
        console.log(nextProps);
        console.log(this.props);
    }

    shouldComponentUpdate(nextProps,nextState){  // 询问是否更新  操作性能优化 
        this.props.logger("shouldComponentUpdate 询问是否更新 ");
        console.log(nextProps);
        console.log(this.props);
        if(nextProps.num!==this.props.num){
            return true;  
        }else{
            return false;
        }
        
    }

    componentWillUpdate(){
        this.props.logger("componentWillUpdate 子组件更新之前 ")
    }


    render(){
        this.props.logger("render  update 子组件正在更新")
        const {
            word,num
        } = this.props;
        return (
            <div>
                <h2> child - component </h2>
                <h2> props=== {word}  ---- {num}</h2>
            </div>
        )
    }

    componentDidUpdate(){
        this.props.logger("componentDidUpdate  子组件更新完毕")
    }

    componentWillUnmount(){
        this.props.logger("componentWillUnmount 组件被销毁 ")
    }


}




 // 组件销毁移除 路由切换 
// componentWillUnmount  这个函数几乎不会使用到，因为浏览器本身具有垃圾回收机制

// class Component{
//     constructor(){

//     }

//     render(){

//     }

//     shouldComponentUpdate(){

//     }

//     componentDidMount(){

//     }
// }