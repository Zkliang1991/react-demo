

// context    隔空传递数据  
// props 传递数据  只能 一层 一层传递  

import PropTypes from "prop-types"

export default class ContextDemo extends Component{

    getChildContext(){
        return {
            msg:"这是 yige context - daydayup",
            word:"努力就会有失败..."
        }
    }
    render(){
        let {
            value
        } = this.props;
        return (
            <div>
                <h2> context 隔空传递数据 </h2>
                <h2>props  == {value}</h2>
                <A msgA={value} ></A>
            </div>
        )
    }
}
// 2
ContextDemo.childContextTypes = {
    msg:PropTypes.string,
    word:PropTypes.string.isRequired
}

ContextDemo.defaultProps = {
    value:"1901 - 奋起直追",
    count:2019
}
ContextDemo.propTypes = {
    value:PropTypes.string.isRequired,
    count:PropTypes.number
}



class A extends Component{
    render(){
        return (
            <div>
                <h2>component === A</h2>
                <hr/>
                <B msgB={this.props.msgA}></B>
            </div>
        )
    }
}

class B extends Component{
    render(){
        return (
            <div>
                <h2>component === B</h2>
                <hr/>
                <C msgC={this.props.msgB}></C>
            </div>
        )
    }
}
class C extends Component{
    render(){
        return (
            <div>
                <h2>component === C</h2>
                <h2>word == {this.context.word}</h2>
                <hr/>
                
                <D msgD={this.props.msgC}></D>
            </div>
        )
    }
}
C.contextTypes = {
    word:PropTypes.string
}

class D extends Component{
    render(){
        console.log(this);
        return (
            <div>
                <h2>component === D</h2>
                <h2>msg === {this.props.msgD}</h2>
                <h2>context == {this.context.msg}</h2>
                <hr/>
            </div>
        )
    }
}

// 3. 
D.contextTypes = {
    msg:PropTypes.string
}