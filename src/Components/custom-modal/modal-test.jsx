import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {

    const [showingModal, setShowingModal] = useState(true);

    function handleShowingModal() {
        setShowingModal(!showingModal)
    }

    function closeModal() {
        setShowingModal(false);
    }

    const header = <h2>Customized Header</h2>;
    const body = <p>This is a customized body or the main element</p>;
    const footer = <h3>Customized footer</h3>

    return (
        <div className="modal-test"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <button
             onClick={handleShowingModal}
            >
                Show Modal!
            </button>
            {showingModal &&
            <Modal
                header={header}
                body={body}
                footer={footer}
                onClose={closeModal}
            />}
        </div>
    )
}