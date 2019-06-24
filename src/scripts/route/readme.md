

# 1. react-router-dom v4  react路由4.0  RR4


react-router ===> 3.0
react-router-dom ===> 4.0 

安装  
cnpm i react-router-dom@4 -S 

# 2. react 路由

路由构建单页面应用   SPA    Signle Page application

路由池注册路由对象  路由path  和  路由组件(模板视图)  
当页面url切换  匹配不同path  匹配成功就加载对应的路由组件  (view);



# 三. BrowserRouter  (组件)   (html5 history api)
说明：使用HTML5历史记录API（pushState，replaceState和popstate事件）的<Router>来保持UI与URL的同步

　1. basename:string 公共路径 所有位置的基本URL。 如果您的应用程序是从服务器上的子目录提供的，则需要将其设置为子目录。

localhost:7000/index.html#/index/home

localhost:7000/myproject/react/dist/index.html#/index/home

basename=/myproject/react/dist/

{/*  上线地址  basename = '/app'  上线目录地址 app  */} 


 2. getUserConfirmation：function  一个用来确认导航功能。默认使用window.confirm。

 3. forceRefresh:bool  如果为true，则路由器将在页面导航中使用全页刷新。 您可能只希望在不支持HTML5历史记录API的浏览器中使用此功能。

 4. keyLength:number location.key的长度。 默认为6

 5. children:node 要呈现的单个子元素。


 # 四  HashRouter  可以刷新的   #hash
 使用URL的哈希部分（即window.location.hash）的<路由器>可以保持您的UI与URL同步 
 兼容性较低  一般建议使用  BrowserRouter
 basename 


 # 五 Link  页面导航  类似 a 标签 

 to:string   链接到的路径名或位置。 
 to:object  要链接的位置。
 repalce:bool  　如果为真，单击链接将替换历史堆栈中的当前条目，而不是添加新条目。
 <Link to={{
  pathname: '/course',
  search: '?sort=name',
  state: { price: 18 }
}} />

 # 六. NavLink    导航
 1. activeClassName: string   高亮的class
 2. activeStyle:object    高亮的样式
 3. exact:bool  当为真时，仅当位置匹配完全时才会应用活动类/样式。
 4. strict: bool  当为真时，在确定位置是否与当前网址匹配时，将考虑位置路径名上的尾部斜线   /home ==>  /home/        /app    ===   /app/


 # 七. Switch 
说明：渲染与位置匹配的第一个小孩<路线>或<重定向>。这不同于仅使用一堆<路线>，<Switch>是唯一的，因为它独家呈现路线。相反，与位置匹配的每个<路线>都会包含

Switch  里面有很多匹配成功的路由 只有加载优先匹配成功的路由组件 


 # 八. Route  important

 Route 这个组件  可以定义路由选项   有对应 path 和 component  属性  routes 
 Route 负责接收对应的路由组件视图   充当路由插槽的作用 router-view 

 exact 表示精准匹配  
 exact = false 模糊匹配

 三种渲染组件的方法 methods
 component    组件  class  Component React.createClass  render 方法 
 render    用于 无状态组件   调用的函数   纯函数 
 children  child props     this.props.children  slot   <Route children={A,B,C} />   
  <Route>{A,B,C}</Route>

 三个属性  props  
  match  获取路由参数  match.params  /:id   
　location   获取当前的url  pathname search 查询参数  ?price=100  查询参数 
　history  切换路由 跳转  history.go  history.goback history.push 

 路由参数  正则匹配
 path = "/home"
 path = "/home/:uid"   match.params.uid 
 path = "/home/:uid?/info/:username"   params  ? 表示可以省略  
 path = "/home?username=zuozuomu&age=29"   ?username=zuozuomu&age=29   serach/query 

 url.parse(location.search,true).query   (url 属于node 模块)


1. exact: bool
当为真时，仅当位置匹配完全时才会应用活动类/样式。
exact:true  精准匹配
path 为 "/one"   exact  只能匹配 /one
path 为  "/one/two"

2. strict: bool   父子路由嵌套 而且 必须显示 子路由
当为真时，在确定位置是否与当前网址匹配时，将考虑位置路径名上的尾部斜线
path "/one/"   将不能匹配 "/one"   但是能匹配 "/one/two"



# 九 Redirect  重定向 
www.baidu.com/node ===>  www.baidu.com/react 
<Redirect to="/">
to:string
to:object
from:string 从哪里重定向到哪里  


# 9. match 

match
params: object 路径参数，通过解析 URL 中的动态部分获得键值对
isExact: bool 为 true 时，整个 URL 都需要匹配
path: string 用来匹配的路径模式，用于创建嵌套的 <Route>
url: string URL 匹配的部分，用于嵌套的 <Link>
在以下情境中可以获取 match 对象

在 Route component 中，以 this.props.match获取
在 Route render 中，以 ({match}) => () 方式获取
在 Route children 中，以 ({match}) => () 方式获取
在 withRouter 中，以 this.props.match的方式获取  修饰器 

# 10. location  / window.location  path url  pathname  search  

在 Route component 中，以 this.props.location 获取
在 Route render 中，以 ({location:location}) => () 方式获取
在 Route children 中，以 ({location}) => () 方式获取
在 withRouter 中，以 this.props.location 的方式获取  装饰 class 

# 11. history

push(path, [state]) 在历史堆栈信息里加入一个新条目。
replace(path, [state]) 在历史堆栈信息里替换掉当前的条目
go(n) 将 history 堆栈中的指针向前移动 n。
goBack() 等同于 go(-1)
goForward 等同于 go(1)
block(prompt) 阻止跳转

在 Route component 中，以 this.props.history 获取
在 Route render 中，以 ({history}) => () 方式获取
在 Route children 中，以 ({history}) => () 方式获取
在 withRouter 中，以 this.props.history 的方式获取  装饰 class 




# 13. Prompt    window.confirm

当用户离开当前页面前做出一些提示。