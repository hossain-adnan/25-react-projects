import { useEffect, useState } from "react"
import "./styles.css"

export default function ScrollIndicator() {

    const [data, setData] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData() {
        try {
            const response = await fetch("https://dummyjson.com/products?limit=100");
            const data = await response.json();
            (data && data.products && data.products.length) ? setData(data.products) : [];
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {fetchData();}, []); //what does this mean?

    function getScrollPercentage() {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        )
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledInPercentage = scrolled / height * 100;

        setScrollPercentage(scrolledInPercentage);
    }

    useEffect(() => {
        document.addEventListener("scroll", getScrollPercentage);

        return () => {document.removeEventListener("scroll", getScrollPercentage)}

    }, []);

    return (
        <div>
            <div className="top-container">
                <h1>Scroll!</h1>
                <div className="scroll-container">
                    <div
                        className="scroll-indicator"
                        style={{width: `${scrollPercentage}%`}}
                    ></div>
                </div>
            </div>
            <div className="bottom-container">
                <ul className="product-list">
                    { data && data.length > 0 ?
                        data.map(product => <p>{product.title}</p>)
                        : null
                    }
                </ul>
            </div>
        </div>
    )
}