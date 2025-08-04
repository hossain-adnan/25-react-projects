import data from "./data.js"
import "./accordion_style.css"
import { useState } from "react";


export default function Accordion() {
    const [multiSelect, setMultiSelect] = useState(false);
    const [selectedID, setSelectedID] = useState([]);

    function enableMultiSelect() {
        setMultiSelect(!multiSelect);
    }

    function selectItem(id) {

        console.log(`Touched:${id}`);

        if (!multiSelect) {
            setSelectedID(prevSelectedID => {
                let existingID = [...prevSelectedID];
                existingID = [];
                return [id];
            })
        }


        const idIndex = selectedID.indexOf(id);

        if (idIndex !== -1) {
            setSelectedID(prevSelectedID => {
                return prevSelectedID.filter(existingID => existingID !== id);
            });
        } else {
            setSelectedID(prevSelectedID => {
                return [...prevSelectedID, id];
            })
        }
    }

    console.log(selectedID);

    return (
        <div className="wrapper">
            <button
                onClick={enableMultiSelect}
                className={multiSelect ? 'clicked' : ''}
            >
                Enable Multi-select
            </button>
            {data.map(item => {
                return (
                    <div
                        className="item"
                        key={item.id}
                    >
                        <div className="title"
                            onClick={() => selectItem(item.id)} //how it is read after mapped
                        >
                            <h3>{item.question}</h3><span>+</span>
                        </div>
                        {/* logic to show:
                            IF multiselect && id not in selected
                            OR NOT multiselect && selectedID's last element is id
                        */}
                        {
                            selectedID.indexOf(item.id) !== -1 &&
                            <div className="details">{item.answer}</div>
                        }
                    </div>
                )
            })}
        </div>
    )
}