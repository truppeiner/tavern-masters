import React from "react";
import "./modal.css";

const Modal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className="modal">
            <h4 className="modal-title">Campaign creation:</h4>
            <div className="campaign-form">This is where the campaign form goes</div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="button">Finish</button>
            </div>
        </div>
    )
}

export default Modal;