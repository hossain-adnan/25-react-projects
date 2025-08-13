import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import "./styles.css";
import { useEffect, useState } from "react";

export default function ImageSlider({url, limit = 5, page = 1}) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchImages();
    }, [url, page, limit]);

    async function fetchImages() {
        if (!url) return;
        setLoading(true);
        try {
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            setImages(Array.isArray(data) ? data : []);
        } catch (e) {
            setError(e.message || "unknown error")
        } finally {
            setLoading(false);
        }
    }

    function handlePrevious() {
        setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));
    }

    function handleNext() {
        setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }

    if (loading) {
        return <div style={{color: "red", fontSize: "20px"}}>Now loading</div>
    }

    if (error) {
        return <div>Error occured! {error}</div>
    }

    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {images && images.length ? images.map((imageItem, index) => (
                <img
                    key={imageItem.id}
                    alt={imageItem.id}
                    src={imageItem.download_url}
                    className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                />
            )) : null}
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                { images && images.length ? images.map((_,index) => (
                    <button
                        key={index}
                        className = {currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"
                        }
                        onClick={() => setCurrentSlide(index)}
                    >
                    </button>
                )) : null }
            </span>
        </div>
    )
}
