import React from "react";
import './styles/modal.css';

export function Modal ({handleClose, show, children, text}) {

    const showHideClassName = show ? "modal" : "modal_none";

    return(
        <div className={showHideClassName}>
            <section className="modal_main">
                {children}
                {text}
                <input type="text" className="modal_input"/>
                <button type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
    );
}