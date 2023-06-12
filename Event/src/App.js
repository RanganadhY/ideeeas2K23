
import './App.css'
import {Routes , Route} from "react-router-dom"
import Photographia from './pages/Photographia';
import DetailsPage from './pages/DetailsPage';
import EventPage from './pages/EventPage.jsx';
import TriveeeaLogin from './pages/TriveeeaLogin';
import Triveeea from './pages/Triveeea';
import TriveeeaID from './pages/TriveeeaID';



function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Photographia />} />
        <Route path="/photographia-login" element={<Photographia/>}/>
        <Route path='/DetailsPage' element={<DetailsPage/>}/>
        <Route path='/EventPage' element={<EventPage/>}/>
        <Route path='/TriveeeaID' element={<TriveeeaID/>}/>
        <Route path='/TriveeeaLogin' element={<TriveeeaLogin/>}/>
        <Route path='/Triveeea' element={<Triveeea/>}/>
      </Routes>
    </>
  )
}

export default App;
