import MenuItem from "./Menu-item"

export default function MenuList({menus}) {
    return(
        <ul style={{listStyleType : "none"}}>
            {menus.map(item => {
               return <MenuItem key={item.label} item={item}/>
            })}
        </ul>
    )
}