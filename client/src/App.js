import './App.css';
import {Route, Routes} from "react-router-dom";
import EventsPage from "./pages/eventsPage"
import LandingPage from "./pages/landingPage.jsx"
import ScrollingPage from './components/aboutus/ScrollingPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
<<<<<<< HEAD
        <Route path='/eventsPage' element={<EventsPage/>}/>
        <Route path='/ScrollingPage' element={<ScrollingPage/>}/>
        
=======
        <Route path='/:eventNum' element={<EventsPage/>}/>
>>>>>>> f77666d2bf987b9520013610dbaabe86a45c7876
      </Routes>
    </>
  );
}

export default App;

