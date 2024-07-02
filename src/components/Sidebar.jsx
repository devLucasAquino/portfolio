

import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/perfil.jpg';

import '../styles/components/sidebar.sass';


const Sidebar = () => {

    function windowAlert(){
        window.alert('infelizmente')
    }

    return(
        <aside id="sidebar">
            <img src={Avatar} alt="perfil" />
            <p className="title">Full Stack Web Development</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn" onClick={windowAlert}>Download curriculo</a>
        </aside>
    )
}

export default Sidebar;