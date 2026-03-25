import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './components/About.js';
import Login from './components/Login.js';
import Create from './components/create.js';
import Dashboard from './components/Dashboard.js';
//import NavBar from './components/Navbar.js';
import TopBar from './components/TopBar.js';
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TournamentSection from "./components/TournamentSection";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Ranking from './components/Ranking/Ranking';

function App() {
  return (
    <div className="app">
      <TopBar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Stats />
            <TournamentSection />
             <Sidebar />
          </>
        } />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other pages here */}
      </Routes>

     
      <Footer />
    </div>
  );
}


export default App;
/*
function App() {
  const mywidth=50
  return (
    <div className="App">
      <NavBar 
      drawerwidth={mywidth}
      content = {
      <Routes>  
        <Route path="" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
      } />

    </div>
  );
}

export default App;
*/