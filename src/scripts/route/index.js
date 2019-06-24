



import {HashRouter as Router,BrowserRouter,Switch ,Route , Link, Redirect } from "react-router-dom";

import {getQuery} from "@/utils"
import { Nested } from "./nested";
import { List } from "./list";
class Home extends Component{

    goAbout=()=>{
        const {history} = this.props;
        // history.push("/about");
        history.push("/find/wh1901~~~~")
    }

    goback=()=>{
        // this.props.history.go(-1);
        // this.props.history.goBack()
        
        history.back();
    }

    render(){
        console.log(this.props);
        const {
            match,
            location
        } = this.props;
        return (
            <div>
                <h2> home - home - wh1901</h2>
                <h2> 只有 通过 Route 组件 加载的 子组件 才能获取 this.props 三个参数 </h2>
                <h2>UID== {match.params.uid}</h2>
                <h2>username== {match.params.username}</h2>
                <h2>age== { new URLSearchParams(location.search).get('age')}</h2>
                <h2>word== { new URLSearchParams(location.search).get('word')}</h2>
                <h2>age== { getQuery(location.search).age}</h2>
                <h2>word== { getQuery(location.search).word}</h2>

                <button  onClick={this.goAbout}> 查看 about </button>
                <button onClick={this.goback}> 返回</button>
            </div>
        )
    }
}

class Find extends Component{
    render(){
        const {
            match,
            location
        } = this.props;
        return (
            <div>
                <h2> Find - Find - 发现她的美</h2>
                <h1> token === {match.params.token}</h1>
                <h1> msg=== {new URLSearchParams(location.search).get('msg')}</h1>
            </div>
        )
    }
}

class Mine extends Component{
    render(){
        return (
            <div>
                <h2> Mine - Mine - 个人中心</h2>
            </div>
        )
    }
}

const NotFound = ()=>(
    <div>
        <h2> 404 - 404  -  NotFound</h2>
    </div>
)

const Demo = (props)=> {
    console.log(props);    // { match,location, history }
    return (
        <div>
            <h1> demo -demo - demo </h1>
        </div>
    )
}


class Layout extends Component{
    render(){
        return (
            <div>
                <h1> layout 这是 路由主视图  </h1>
                <div >
                    <a href="/">首页1</a>
                    <Link to="/home/1901/post/zuozuomu?age=28&word=努力一定会失败" >首页2 - zuozuomu</Link>
                    <Link to="/home/1905/post/leson?age=18&word=一群二傻子" >首页3 - leson</Link>
                    <Link to={{
                        pathname:"/find/wuhan1901",
                        search:"?msg="+'马上周末,好好学 react '
                    }} >发现</Link>
                     <Link to="/about/one" >关于App</Link>
                    <Link to="/demo/wh1901?time=0614" >App 案例</Link>
                    <Link to="/nested/" >Nested-Nested</Link>
                    <Link to="/list/" >List-List</Link>

                    <Link to="/mine" >我的</Link>
                </div>
                <hr/>
                <div style={{border:"2px solid blue"}}>
                    <Switch>
                        {/* 路由出口  */}
                        <Route path="/"  component={Home} exact  />
                        <Route path="/home/:uid/post/:username?"  component={Home} />
                        <Route path="/find/:token"  component={Find} />
                        <Route path="/mine"  component={Mine} />
                        <Route path="/demo/:names"  render={Demo} />
                        <Route path="/nested/:min?" strict  component={Nested} />
                        <Route path="/list" component={List}/>
                        <Route path="/about/" strict render={()=> (  <h2>about about 关于 app </h2> )}/>
                        <Route  render={()=>{ 
                            return <Redirect to="/mine" />
                        }} />
                        <Route render={NotFound} />
                    </Switch>
                </div>
            </div>
        )
    }
}


const App = ()=> (
    <div>
        <h2> 这是 react -router-dom v4 app </h2>
        <hr/>
        <Layout></Layout>
    </div>
)

export default class  IndexRouter extends Component{
    render(){
        return (
            <Router
            basename="/"   //上线 路径改变 才需要改写
            >
                <div>
                    <h1> 武汉1901 daydayup</h1>
                    <App></App>
                </div>
            </Router>
        )
    }
}