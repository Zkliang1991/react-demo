

// 留言板  TodoList2
// 显示留言 ShowMsgCom
// 提交留言组件  PostMsgCom
 
import {Button,WhiteSpace,NoticeBar,InputItem,List} from "antd-mobile"

const Item = List.Item;


export default class TodoList2 extends Component{

    state= {
        comments:[
            {
                title:"node ",
                content:"node -node 我已经精通了"
            },
            {
                title:"vue ",
                content:"vue -node vue的项目还需要后期 改进 "
            },
            {
                title:"react ",
                content:"react -我希望用 typescript 写 RN 项目 "
            },
            {
                title:"angular ",
                content:"angular 确实有点 难的变态  "
            },
        ]
    }

    addComment=(title,content)=>{
        // console.log(this.refs);
        // var title  = this.refs.title.state.value;
        // var content  = this.refs.content.state.value;
        this.state.comments.push({
            title,
            content
        })

        this.setState({
            comments:this.state.comments
        })
        // this.refs.title.state.value = "";
        // this.refs.content.state.value = ""
    }

    delComment=(id)=>{
        // this  ===> null 
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
                <h2> TodoList2 -- 留言板   </h2>

                <ShowMsgCom comments={this.state.comments} delComment={this.delComment}></ShowMsgCom>
                <PostMsgCom addComment={this.addComment}></PostMsgCom>

            </div>
        )
    }
}

class ShowMsgCom extends Component{

    del(id){
        const {delComment} = this.props;
        var item = "item"+id;
        document.getElementById(item).className = "am-list-item move-out am-list-item-middle";
        setTimeout(()=>{
            delComment(id);
            document.getElementById(item).className = "am-list-item  am-list-item-middle"
        },900);
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
                                <Button onClick={()=>this.del(i)} type="warning" inline >XX</Button>
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
        this.refs.title.state.value = "";
        this.refs.content.state.value = "";
        addComment(title,content);
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