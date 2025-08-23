import "./styles.css"

export default function Modal({header, body, footer, id, onClose}) {
    
    return (
        <div className="modal" id={id || "Modal"}>
            <div className="modal-wrapper">
                <div className="modal-header">
                    {header || "This is a default header"}
                    <button onClick={onClose}>x</button>
                </div>
                <div className="modal-body">
                    {body || "This is default body elements"}
                </div>
                <div className="modal-footer">
                    {footer || "This is a default footer"}
                </div>
            </div>
        </div>
    )
}