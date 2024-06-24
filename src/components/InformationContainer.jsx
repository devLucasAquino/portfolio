import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
    return(
        <section id="information">
            <div className="info-card">
                <AiFillPhone id='phone-icon'/>
                <div>
                    <h3>Telefone</h3>
                    <p>(11) 9 7625-3412</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id='email-icon'/>
                <div>
                    <h3>E-mail</h3>
                    <p>joaolucas.aqalves111@outlook.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id='pin-icon'/>
                <div>
                    <h3>Localizacao</h3>
                    <p>Sao Paulo / SP</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer;