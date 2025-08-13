import { useState } from "react"
import MenuList from "./Menu-list"

export default function MenuItem({item}) {
    const [displayChildren, setDisplayChildren] = useState({});

    function handleToggle(label) {
        // check displayChildren array
        // if [label] exits toggle it to true or false
        setDisplayChildren(prev => {
            const displayData = {...displayChildren}
            displayData[label] = !displayData[label];
            console.log(displayData);
            return displayData;
        })
    }

    return (
        <li>
            <div className="label-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <p>{item.label}</p>
                {item.children && item.children.length > 0 ? (
                    <span 
                        onClick={() => handleToggle(item.label)}
                        style={{fontWeight : "bold", cursor : "pointer", color: "blueviolet"}}
                    >
                        {displayChildren[item.label] === true ? "-" : "+" }
                    </span>
                ) : null}

            </div>

            {item && item.children && item.children.length > 0 && displayChildren[item.label] ? (
                <MenuList menus={item.children}/>
            ) : null}
        </li>
    )

}