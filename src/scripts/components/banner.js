

import Swipe from "./swipe";
let  SwiperItem = Swipe.item;  

import {ajax} from "@/utils/ajax"
export default class Banner extends Component {

    state = {
        mv:[1,2,3,4],
        goods:[]
    }

    componentWillMount(){
        ajax.get("http://localhost:1901/vue/getGoodList",{
            limit:7
        })
        .then(res=>{
            console.log(res);
            this.setState({
                goods:res.data.result
            })
        })
    }

    render(){
        const mvs = this.state.mv.map((item,i)=>{
            return (
                <SwiperItem key={i} id="1">
                    <h1 style={{height:180,background:'orange'}}> {item} -- {i}</h1>
                </SwiperItem>
            )
        })

        const arr = this.state.goods.map((item,i)=>{
            return (
                <SwiperItem key={i} >
                    <img src={item.img}  style={{height:280,width:'100%'}} alt=""/>
                </SwiperItem>
            )
        })
        return (
            <div>
                <h2> banner- banner </h2>
                <Swipe id="b1" options={ {loop:true,speed:10000 } }>
                    { mvs }
                </Swipe>
                <Swipe id="b2" options={ {loop:false,speed:1200 } }>
                    { arr }
                </Swipe>

            </div>
        )
    }
}