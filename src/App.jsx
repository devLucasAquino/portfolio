import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>Lucas Aquino</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
