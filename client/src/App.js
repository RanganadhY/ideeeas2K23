import './App.css';
import {Route, Routes} from "react-router-dom";
import EventsPage from "./pages/eventsPage"
import LandingPage from "./pages/landingPage.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/eventsPage' element={<EventsPage/>}/>
      </Routes>
    </>
  );
}

export default App;

