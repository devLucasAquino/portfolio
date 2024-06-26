import {
    DiJsBadge,
    DiMysql,
    DiReact,
    DiHtml5,
    DiSass,
    DiCss3
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
    {id: 'html', name: 'HTML5', icon: <DiHtml5 />, description: 'Tecnologia fundamental para a WEB'},
    {id: 'css', name: 'CSS3', icon: <DiCss3 />, description: 'Ferramenta para estilizar o HTML'},
    {id: 'js', name: 'JavaScript', icon: <DiJsBadge />, description: 'Presente em todos os setores da tecnologia'},
    {id: 'react', name: 'ReactJS', icon: <DiReact />, description: 'Uma poderosa juncao de HTML e JS'},
    {id: 'sass', name: 'Sass', icon: <DiSass />, description: 'Estilos de forma simples e produtiva'},
    {id: 'mysql', name: 'MySQL', icon: <DiMysql />, description: 'Armazenamento de dados de forma relacional'},
]

const TechnologiesContainer = () => {
    return(
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer;
