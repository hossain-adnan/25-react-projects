import { useState } from "react"
import QRCode from "react-qr-code";

export default function QRcodeGenerator() {

    const [input, setInput] = useState(''); 
    const [qrValue, setQrValue] = useState('');

    function handleGenerate() {
        setQrValue(input);
        setInput("");
    }

    return (
        <div
            style={{display :"flex",flexDirection :"column",maxWidth : "370px"}}
        >
            <input 
                type="text" 
                placeholder="enter text to convert into QR code"
                onChange={e => setInput(e.target.value)} 
                value={input}
                style={{fontSize :"20px"}}
            />
            <button
                onClick={handleGenerate}
                disabled={input === ''}
                style={{fontSize :"20px", marginBottom :"20px", flex : 0}}
            >
                Generate
            </button>
            <div>
                <QRCode
                    value={qrValue}
                    size={370}
                />
            </div>
        </div>
    )
}