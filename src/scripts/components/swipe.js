
import PropTypes from "prop-types"
// 封装组件  props children 
// new Swiper()  实例化 
export default class Swipe extends Component {
    render(){
        const {
            id ,
            children
        }  = this.props; 
        console.log(this.props);
        return (
            <div className="swiper-container" id={id}>
                <div className="swiper-wrapper">
                    {
                        children&&children.map((child,index)=>{
                            return ( child )
                        })
                    }
                </div>
            </div>
        )
    }

    componentWillMount(){

    }

    componentDidMount(){
        let {id,options,children} = this.props;
        if(children.length>0){
            let mySwiper = new Swiper("#"+id,options);
        }
        
    }

    componentDidUpdate(){
        console.log("update ...." ) 
        let {id,options,children} = this.props;
        if(children.length>0){
            let mySwiper = new Swiper("#"+id,options);
        }
    }
}

Swipe.propTypes = {
    id:PropTypes.string.isRequired,
    options:PropTypes.object.isRequired
}
// 静态属性  
Swipe.item  =  (props)=>{
    console.log(props);  // this.props; 
    return (
        <div className="swiper-slide">
            {props.children}
        </div>
    )
}   


// export  class Slide extends Component{
//     render(){
//         return (
//             <div className="swiper-slide">
//                 {this.props.children}
//             </div>
//         )
//     }
// }