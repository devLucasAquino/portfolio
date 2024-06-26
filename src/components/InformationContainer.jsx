import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationcontainer.sass';

const informations = [
    {
        icon: <AiFillPhone id='phone-icon'/>,
        title: 'Telefone',
        paragraph: '(11) 9 7625-3412'
    },
    {
        icon: <AiOutlineMail id='email-icon'/>,
        title: 'E-mail',
        paragraph: 'joaolucas.aqalves111@outlook.com'
    },
    {
        icon: <AiFillEnvironment id='pin-icon'/>,
        title: 'Localizacao',
        paragraph: 'Sao Paulo / SP'
    },
]

const InformationContainer = () => {
    return(
        <section id="information">
            {informations.map((info) => (
                <div className='info-card'>
                    {info.icon}
                    <div>
                        <h3>{info.title}</h3>
                        <p>{info.paragraph}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default InformationContainer;