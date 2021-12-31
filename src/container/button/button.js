export const Button = (props)=>{
    const {
        name,
        className,
        onClick
    } = props

    return (
        <button onClick={onClick} className={className}>{name}</button>
    )
    
}