
import {Link,Switch,Route} from "react-router-dom"
export class List extends Component{
    state = {
        todos:["vue","react","angular4.0","node+express","小程序"]
    }

    render(){
        return (
            <div>
                <h2> list -list -list </h2>
                {
                    this.state.todos.map((todo,i)=>{
                        return (
                            <Link key={i} to={"/list/detail/"+todo+"?id="+i}>  {todo}-=== {i} </Link>
                        )
                    })
                }

                <Switch>
                    <Route path="/list/detail/:course?" render={Detail} />
                </Switch>
            </div>
        )
    }
}


const Detail = ({location,match,history})=>{
    console.log(match)
    return (
        <div>
            <h2> detail ----  {match.params.course}</h2>
            <h2>index=== {new URLSearchParams(location.search).get('id')}</h2>
        </div>
    )
}