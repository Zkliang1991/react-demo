

import {Route,Switch,Link,Redirect} from "react-router-dom"

export class Nested extends Component{
    render(){
        return (
            <div>
                <h2> react - 嵌套路由</h2>
                <h2> react 有多少层嵌套 就 写多少 Route 组件</h2>
                <div>
                    <Link to="/nested/one">One</Link>
                    <Link to="/nested/two">Two</Link>
                    <Link to="/nested/three">Three</Link>
                </div>
                <h2>*************************</h2>
                <hr/>

                <div style={{border:"2px solid red"}}>
                    <Switch >    
                        {/* <Route path="" render={()=> (<Redirect to="/nested/one"  />)   } /> */}
                        <Route path="/nested/:min?" render={({match})=>(<h2>ARe you  ok  ===>  {match.params.min || "/"} </h2>)}></Route>
                        
                    </Switch>
                </div>
                
            </div>
        )
    }
}