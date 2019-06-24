


// react  数据请求 
// 希望在父组件 请求数据  子组件渲染 数据 

import {ajax} from "@/utils/ajax"
// ajax.get("http://localhost:1901/vue/getGoodList")
// .then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err)
// })
export default class DataDemo extends Component{

    state = {
        goods:[]
    }

    componentWillMount(){
        ajax.get("http://localhost:1901/vue/movie")
        .then(res=>{
            this.setState({
                goods:res.data.result.reverse()
            })
        })
    }


    deleteOne=idx=>{
        this.state.goods.splice(idx,1);  // 可以改变原数组 
        this.setState({
            goods:this.state.goods
        })
    }


    render(){
        const items = this.state.goods.map((g,index)=>{
            return (
                <li key={index}>
                    <Item good={g} idx={index} deleteOne={this.deleteOne} ></Item>
                </li>
            )
        })
        return (
            <div>
                <h2> react 数据请求  </h2>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

class Item extends Component{
    render(){
        const {good,idx,deleteOne}  = this.props;
        const styles = {width:'100%',padding:10,boxSizing:'border-box',borderBottom:"4px dotted #000"};
        const delay = {animationDelay:idx*300+'ms'};
        const obj = {...styles,...delay};
        return (
            <div className="move-in" style={obj} onClick={()=>deleteOne(idx)}>
                <img src={good.images.large} alt="" style={{width:"100%",height:270}}/>
                <h2>title == {good.title }  / {good.year}</h2>
            </div>
        )
    }
}

