import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <canvas id="img"></canvas>
            <p className="title">Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informacoes de contato</p>
            <a href="" className="btn">Download curriculo</a>
        </aside>
    )
}

export default Sidebar;