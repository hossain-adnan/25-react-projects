import MenuList from "./Menu-list"


export default function Treeview({ menus=[] }) {
    return (
        <div className="tree-view-container" style={{fontSize : "20px"}}>
            <MenuList menus={menus}/>
        </div>
    )
}