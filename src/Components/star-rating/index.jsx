import { useState } from 'react';
import './style.css';
import { FaStar } from "react-icons/fa";


export default function StarRating({noOfStars = 5}) {

    // state variables to detect hover and click
    const [clicked, setClicked] = useState(0);
    const [hovered, setHovered] = useState(0);

    function handleMouseMove(index) {
        setHovered(index);
    }

    function handleMouseLeave() {
        // when the mouse leaves it styles upto the stars that was clicked previously
        setHovered(clicked); 
    }

    function handleClick(index) {
        setClicked(index);
    }

    return(
        <div className='container'>
            <h2 className='instruction'>Rate this page!</h2>
            <div className='star-rating'>
                {[...Array(noOfStars)].map((_, index) => {
                    index += 1; //start from 1 instead of 0
                    // for each index produce a star
                    return(
                        <FaStar
                            key={index}
                            size={40}
                            className={index <= (hovered || clicked) ? 'active' : 'inactive'} // style upto selected star
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(index)}
                        />
                    )
                })}
            </div>
        </div>
    )
}