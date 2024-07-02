import { useState } from 'react';

import SocialNetworks from './SocialNetworks.jsx';
import InformationContainer from './InformationContainer.jsx';
import Modal from './Modal.jsx'

import Avatar from '../img/perfil.jpg';

import '../styles/components/sidebar.sass';


const Sidebar = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="perfil" />
            <p className="title">Full Stack Web Development</p>
            <SocialNetworks />
            <InformationContainer />
            <a className="btn" onClick={handleOpenModal}>Download curriculo</a>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </aside>
    )
}

export default Sidebar;