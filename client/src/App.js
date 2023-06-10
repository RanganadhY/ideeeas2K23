import './App.css';
import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/eventsPage"
import LandingPage from "./pages/landingPage.jsx"
import ScrollingPage from './components/aboutus/ScrollingPage';
import Contactus from './pages/contactus';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/:eventNum' element={<EventsPage />} />
       <Route path='/ScrollingPage' element={<ScrollingPage/>}/>
        <Route path='/Contact' element={<Contactus/>}/>      
        
       

      </Routes>
    </>
  );
}

export default App;

