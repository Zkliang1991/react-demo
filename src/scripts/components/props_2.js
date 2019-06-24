/*
 组件之间的通信 
 
 1. 父子 组件 
 <A>
    <B></B>
 </A>
 2. 兄弟组件 
 <A></A><B></B>

 props 传递数据
 state 修改数据 

子组件如何修改 父组件  
props 

父组件把 state 通过 props 传递给子组件  
父组件 还会把 修改自身 state 的函数 通过 props 传递给 子组件 

子组件只要调用 props 传递过来的方法  就可以实现 子组件修改 父组件 

*/ 


export default class Prop2 extends Component{
    state = {
        word:"1901 天道酬勤 ",
        show:true,
        num:1000
    }

    changeWord=word=>{
        this.setState({
            word
        })
    }

    changeShow = show =>{
        this.setState({show})
    }

    render(){
        let {
            show 
        }  = this.state ;

        return (
            <div>
                <h2> 子组件 修改 父组件  parent </h2>
                <h2> word == {this.state.word}</h2>
                <p
                style={{width:150,height:150,background:'orange',display:show?'block':'none'}}
                > 子组件控制我的显示和隐藏</p>
                <hr/>
                <Child ref="one" 
                word={this.state.word}
                show={show}
                changeWord={this.changeWord}
                changeShow = {this.changeShow}
                ></Child>
            </div>
        )
    }
}

const course = ["node","vue","react",'小程序',"angular"];


class Child  extends Component{

    setWord=()=>{
        console.log(this.refs.two.value);
        console.log(this);
        this.props.changeWord(this.refs.two.value)
    }
    setShow=()=>{
        this.props.changeShow(!this.props.show);
        // ()=>this.props.changeShow(!show)
    }
    render(){
        let {
            word ,
            show
        } = this.props;
        return (
            <div>
                <h2> 子组件 child </h2>
                <button onClick={this.setShow}> 子组件 修改 父组件  {show?'显示':'隐藏'}  </button>
                <input type="text" ref="two" value={word} onChange={this.setWord} />
                <h2>++++++++++++++++++++++++++++++</h2>
                <List
                uesrname="forever"
                id="box"
                >
                    {course}
                </List>
            </div>
        )
    }
}

// 父组件  内容分发 slot 动态接收父组件传递子组件 数据 (html)  
// this.props.children  负责 插槽 
class List extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h2>list - list - list</h2>
                <h2> username = {this.props.uesrname}</h2>
                {
                    this.props.children.map((child,index)=>{
                        return (
                            <p key={index}> {child}</p>
                        )
                    })
                }
            </div>
        )
    }
}
