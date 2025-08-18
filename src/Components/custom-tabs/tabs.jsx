import { useState } from "react";
import "./style.css"

export default function Tabs({tabContents, onChange}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleClick(index) {
        setCurrentIndex(index);
        onChange(index);
    }

    return (
        <div className="tabs-wrapper">
            <div className="top-tabs-container">
                {tabContents.map((tabElement, index) => (
                    <div
                        className={`tabs-label ${index === currentIndex ? "active-label" : null}`}
                        onClick={() => handleClick(index)}
                    >
                        {tabElement.label}
                    </div>
                ))}
            </div>
            <div className="bottom-tabs-container">
                {/* {tabContents.map((tabElement, index) => {
                    if (index === currentIndex) {
                        return <div className="tabs-content">{tabElement.content}</div>
                    }
                })} */}
                {tabContents[currentIndex]?.content}
            </div>
        </div>
    )
}