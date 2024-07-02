import { VscLoading } from "react-icons/vsc";

import '../styles/components/modal.sass';

const Modal = ({ isOpen, onClose }) => {
    if(!isOpen) return null;

    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <h3>Em desenvolvimento...</h3>
                <VscLoading />
            </div>
        </div>
    )
}

export default Modal;