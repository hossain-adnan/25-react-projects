import data from "./data.js"
export default function Accordian() {

    //Item
        //Title= data.question
        // Collapsable Details = data.answer

    return (
        <div className="wrapper">
            {data.map(item => {
                return(
                    <div className="item">
                        <div className="title">
                            {item.question}
                        </div>
                        <div className="details">
                            {item.answer}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}