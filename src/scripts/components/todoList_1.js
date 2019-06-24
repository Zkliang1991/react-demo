

// 留言板 
 
import {Button,WhiteSpace,NoticeBar,InputItem,List} from "antd-mobile"

const Item = List.Item;


export default class TodoList1 extends Component{

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

    addComment=()=>{
        console.log(this.refs);
        var title  = this.refs.title.state.value;
        var content  = this.refs.content.state.value;
        this.state.comments.push({
            title,
            content
        })

        this.setState({
            comments:this.state.comments
        })
        this.refs.title.state.value = "";
        this.refs.content.state.value = ""
    }

    delComment(id){
        this.state.comments.splice(id,1);
        var item = "item"+id;
        document.getElementById(item).className = "am-list-item move-out am-list-item-middle"
        
        setTimeout(()=>{
            this.setState({
                comments:this.state.comments
            })

            document.getElementById(item).className = "am-list-item  am-list-item-middle"
        },901);
    }

    componentDidMount(){
        // document.getElementById("item0").className =" am-list-item  am-list-item-middle"
    }


    render(){
        return (
            <div>
                <h2> TodoList1 -- 留言板   </h2>

                <div style={{"border":"2px solid red"}}>
                    <List renderHeader={() => '展示留言'}>
                        {
                            this.state.comments.map((val,i)=>{
                                return (
                                    <Item id={"item"+i} className="move-in" key={i} extra={val.content} style={{background:'pink'}}> 
                                         
                                     {val.title}
                                     <Button onClick={()=>this.delComment(i)} type="warning" inline >XX</Button>
                                     </Item>
                                )
                            })
                        }

                    </List>    
                </div>

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
                    <Button type="primary" onClick={this.addComment}>提交留言</Button><WhiteSpace />
                </div>
            </div>
        )
    }
}