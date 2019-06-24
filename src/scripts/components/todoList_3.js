

// 留言板  TodoList2
// 显示留言 ShowMsgCom
// 提交留言组件  PostMsgCom
 
import {Button,WhiteSpace,NoticeBar,InputItem,List} from "antd-mobile"

const Item = List.Item;

import {ajax} from "@/utils"

import axios from "axios";
import {Toast} from "antd-mobile"
export default class TodoList2 extends Component{

    state= {
        comments:[
            
        ]
    }

    componentWillMount(){
        axios.get("http://localhost:1901/react/getComments")
        .then(res=>{
            console.log(res);
            this.setState({
                comments:res.data.result
            })
            Toast.info(res.data.msg,1);
        })
    }

    addComment=(comments)=>{
        this.setState({
            comments
        })
    }

    delComment=(id)=>{
        
        this.state.comments.splice(id,1);
        this.setState({
            comments:this.state.comments
        })
    }

    componentDidMount(){
        // document.getElementById("item0").className =" am-list-item  am-list-item-middle"
    }


    render(){
        return (
            <div>
                <h2> TodoList3 -- 留言板  -- ajax  </h2>

                <ShowMsgCom comments={this.state.comments} delComment={this.delComment}></ShowMsgCom>
                <PostMsgCom addComment={this.addComment}></PostMsgCom>

            </div>
        )
    }
}

class ShowMsgCom extends Component{

    del(id,_id){
        const {delComment} = this.props;
        var item = "item"+id;
        axios.get("http://localhost:1901/react/delComment",{
            params:{
                _id
            }
        }).then(
            res=>{
                document.getElementById(item).className = "am-list-item move-out am-list-item-middle";
                setTimeout(()=>{
                    delComment(id);
                    document.getElementById(item).className = "am-list-item  am-list-item-middle"
                },900);
                Toast.info(res.data.msg,1);
            }
        )
        
    }


    render(){
        return (
            <div style={{"border":"2px solid red"}}>
                <List renderHeader={() => '展示留言'}>
                    {
                        this.props.comments.map((val,i)=>{
                            return (
                                <Item id={"item"+i} className="move-in" key={i} extra={val.content} style={{background:'pink'}}> 
                                    
                                {val.title}
                                <Button onClick={()=>this.del(i,val._id)} type="warning" inline >XX</Button>
                                </Item>
                            )
                        })
                    }

                </List>    
            </div>
        )
    }
}

class PostMsgCom  extends Component{
    change=()=>{
        const {addComment} = this.props;
        var title  = this.refs.title.state.value;
        var content  = this.refs.content.state.value;
        axios.post("http://localhost:1901/react/addComment",{title,content})
        .then(res=>{
            this.refs.title.state.value = "";
            this.refs.content.state.value = "";
            addComment(res.data.result);
            Toast.info(res.data.msg,1);
        })
       
        
    }
    render(){
        return (
            <div style={{"border":"2px solid blue"}}>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                        欢迎提交留言 
                </NoticeBar>
                <div>
                    <InputItem
                    type="text"
                    placeholder="请输入标题"
                    ref="title"
                >标题</InputItem>
                    <InputItem
                    type="text"
                    placeholder="请输入内容"
                    ref="content"
                >内容</InputItem>
                </div>
                <Button type="primary" onClick={this.change}>提交留言</Button><WhiteSpace />
            </div>
        )
    }
}