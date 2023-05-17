import './App.css';
import {Route, Routes} from "react-router-dom";

import LandingPage from "./pages/landingPage.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='*'/>
      </Routes>
    </>
  );
}

export default App;
