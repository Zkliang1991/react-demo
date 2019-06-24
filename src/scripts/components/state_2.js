


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

 父组件如何修改子组件

 父组件把组件的state 当着子组件的props 传递给子组件
 父组件修改 state 会二次render 子组件接收到变化的 props  从而实现子组件修改  

 ref   this.refs  对象获取
 1. ref 作用于DOM 元素  指向这个真实的DOM元素
 2. ref 作用于组件  指向这个组件对象   

*/ 


export default class State2 extends Component{
    state = {
        word:'1901 dadayup',
        num:1901,
        show:true
    }

    getVal =(e)=>{
        console.log(this.refs.one);
        this.setState({
            word:this.refs.one.value
        })
    }

    changeShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    todoByRefs = ()=>{
        console.log(this.refs);
        this.refs.child.changeCount(10);
    }
    render(){
        const {
            word,
            num,
            show
        } = this.state
        
        return (
            <div>
                <h2> state 父子组件交互  -parent </h2>
                <h2> state == {num} -- {word} </h2>
                <h2>props == {this.props.names}  -- {this.props.msg}</h2>
                <button onClick={this.changeShow} > {show?'点击隐藏':'点击显示'}</button>
                <p> <input type="text" ref="one" value={word} onChange={this.getVal} /> </p>
                <button onClick={this.todoByRefs}>通过 refs 去调用子组件 方式修改 子组件 </button>
                <hr/>
                <Child word={word} ref="child" show={show} ></Child>

            </div>
        )
    }
}

class Child extends Component{

    state = {
        count:1000
    }

    changeCount=v=>{
        this.state.count+=v;
        this.setState({
            count:this.state.count
        })
    }

    render(){
        let {
            word,
            show
        } = this.props;
        return (
            <div>
                <h2> child - child -child </h2>
                <h2>props  == {word}</h2>
                <h2> count == {this.state.count }</h2>
                <p
                style={{width:150,height:150,background:'red',display:show?'block':'none'}}
                > 父组件控制我的显示和隐藏</p>
            </div>
        )
    }
}