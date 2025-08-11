import { useEffect, useState } from "react"
import "./styles.css"

export default function LoadMore() {

    const [products, setProducts] = useState([]);
    // const [productIDs, setProductIDs] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchItem() {
        try {
            setIsLoading(true);
            // const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
            // count === 0 ? 0 : count * 20
            // }`);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts(prevProducts => {
                    const newProducts = data.products.filter(
                        p => !prevProducts.some(prev => prev.id === p.id)
                    );
                    return [...prevProducts, ...newProducts];
                    });
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchItem();
        console.log(count);
    }, [count]);

    useEffect(() => {
        console.log(`Products: ${products.length}`);
    }, [products]);

    return (
    <div className="load-more-container">
        <div className="product-container">
            { products && products.length ?
                products.map(productItem => { 
                    return (
                        <div className="product" key={productItem.id}>
                            <img 
                                src={productItem.thumbnail}
                                alt={productItem.title}
                            />
                            <p>{productItem.title}</p>
                        </div>
                    )
                })
            : null }
        </div>
        <div className="button-container">
            <button 
                onClick={() => setCount(count + 1)} 
                className="load-more-btn"
                disabled={products.length === 100}
                style={{fontSize: "20px"}}
            >
                Load More
            </button>
        </div>
        <div><h2 style={{marginTop: 0}}>{products.length === 100 && "No more products to show"}</h2></div>
    </div>)
}