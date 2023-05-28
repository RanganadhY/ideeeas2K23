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
        <Route path='/events/:eventNum' element={<EventsPage/>}/>
        <Route path='/ScrollingPage' element={<ScrollingPage/>}/>
        
      </Routes>
    </>
  );
}

export default App;

