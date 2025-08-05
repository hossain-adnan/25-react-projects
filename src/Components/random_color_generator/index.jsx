import { useEffect, useState } from "react"

export default function RandomColor(){

    const [color, setColor] = useState("#000000");
    const [colorType, setColorType] = useState("hex");

    function randomGenerator(range) {
        return Math.floor(Math.random() * range);
    }

    function generateRandomHex() {
        let hexRange = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hexRange[randomGenerator(hexRange.length)];
        }

        setColor(hexColor);
    }

    function generateRandomRgb() {
        let r = randomGenerator(256);
        let g = randomGenerator(256);
        let b = randomGenerator(256);

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        colorType === 'hex' ? generateRandomHex() :
        generateRandomRgb();
    }, [colorType]);
    
    return (
        <div
            style={{
                background: color,
                textAlign: 'center',
                width: '100vw',
                height: '100vh'
            }}
        >
            <button onClick={() => setColorType('rgb')}>set RGB color</button>
            <button onClick={() => setColorType('hex')}>set HEX color</button>
            <button
                onClick={colorType === 'hex' ? generateRandomHex : generateRandomRgb}
            >
                generate random color
            </button>
            <div>
                <h2>{colorType}</h2>
                <h1>{color}</h1>
            </div>
        </div>
    )
}