


// import React  from "react";

// JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），
// 就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析

const title = "wuhan1901"
export default class Demo extends React.Component{
    render(){
        return (
            <div >
                <h2>demo -demo -demo </h2>
                <h2> {title } </h2>
            </div>
        )
    }
}