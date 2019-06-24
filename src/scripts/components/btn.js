


export default class MyBtn extends Component{
    render(){
        const {
            txt,
            disabled,
            onClick,
            className,
            style
        } = this.props; 
        return (
            <button className={className} style={style}  disabled={disabled} onClick={onClick} > {txt}  </button>
        )
    }
}