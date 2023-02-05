import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/services.jsx'
import Projects from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Home/>
      <Services/>
      <Projects/>
      <Contact/>


    </div>
  );
}

export default App;
