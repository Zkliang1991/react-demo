


/*
  state 状态 react 组件数据交互的载体  状态用来修改的    data 

  1. state 不能在组件外部定义  不能在组件外部 修改  只能在组件内部定义声明 只能在内部修改 
  2. state 用来被修改的  this.state 获取 state, this.setState() 来修改 state 
  3. state 在组件内部的 getInitialState 来初始化定义 state ,必须返回一个对象 
  4. state 修改 setState 这个方法会修改 state 会重新执行 组件内部的 render方法 , 会触发页面的
  二次渲染  虚拟DOM 会根据react 的 diff  算法  得到新的虚拟DOM 最后的批量的更新    

*/ 


let timer = null;
export default class State1 extends Component{

    constructor(){
        super(); // 继承父类
        // this.state = {
        //     count:2019,
        //     val:"1901 做好的 react 项目"
        // }
    }

    countAdd=()=>{
        // this.state.count++;   // 同步修改  只是修改数据
        console.log(this.state.count);
        this.setState({      // 异步修改  不仅修改数据  触发react diff 
            count:++this.state.count
        })
    }

    // 定义 方式 2 
    state = {
        word:"1901 2周拿offer ",
        count:2019,
        val:"1901 做好的 react 项目",
        num:0
    }
    start = ()=>{
        if(!timer){
            timer = setInterval(()=>{
                this.setState({
                    num:++this.state.num
                })
            },1000)
        }
    }

    pause = ()=>{
        if(timer){
            clearInterval(timer);
            timer = null;
        }
    }

    render(){
        console.log(this);
        console.log(this.props);  
        const  {
            count,
            val,
            num
        }   = this.state;
        // 死循环
        // this.setState({
        //     count:++this.state.count
        // })

        return (
            <div>
                <h2> react state  状态 </h2>
                <h2>props  {this.props.msg }</h2>
                <h1 onClick={this.countAdd}> state == {count} -- {val}</h1>
                <h2> 计数器  </h2>
                <h2> num == {num }</h2>
                <button onClick={this.start}> 开始计数 </button>
                <button onClick={this.pause}> 暂停计数 </button>

            </div>
        )
    }
}


State1.defaultProps = {
    type:true,
    score:99
}
