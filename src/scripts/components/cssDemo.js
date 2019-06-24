

// react 书写 样式 

// 1. 基于class  但是 react 必须 className 代替class
// 2. 基于内联样式 style  style = {obj}   遵循 驼峰命名 
// style = {backgroundColor:"red",fontSize:20}
// lineHeight:'20px'    必须带单位 
// 3. 全局变量  外部样式   原型链挂载 

const cssObj = {
    border:'2px solid blue',
    color:'green'
}

import {css} from "@/utils/commoncss";

export default class CssDemo extends Component{
    render(){
        console.log(this);
        return (
            <div>
                <h2 className="h2"> react - 书写样式 </h2>
                <div className="cssbox" >rem 100</div>
                <p style={ {color:'red',backgroundColor:'yellow',fontSize:40,lineHeight:2 }   } >react  so easy</p>
                <p style= {cssObj}  > wuhan1901 daydayup </p>
                <h2 style={css.one} > wuhan1901 天道酬勤 </h2>
                <h2 style={this.css.two} > wuhan1901 爱拼才会赢 </h2>
            </div>
        )
    }
}

CssDemo.prototype.css = {   // this  指向原型对象 
    two:{
        color:"red",
        border:"4px  dotted red"
    }
}