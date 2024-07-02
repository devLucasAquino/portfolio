import { VscLoading } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";


import '../styles/components/modal.sass';

const Modal = ({ isOpen, onClose }) => {
    if(!isOpen) return null;

    return(
        <div className="modal-content">
            <button className="modal-close" onClick={onClose}>
                <AiOutlineClose />
            </button>
            <h3>Em desenvolvimento...</h3>
            <VscLoading id="loading"/>
        </div>
    )
}

export default Modal;