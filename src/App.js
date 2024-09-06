import Dashboard from './components/Dashboard';
import MissionSection from './components/MissionSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import Allnsights from './components/Allnsights';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <MissionSection/>
      <ProjectsSection/>
      <Allnsights/>
      <Footer/>
    </div>
  );
}

export default App;
