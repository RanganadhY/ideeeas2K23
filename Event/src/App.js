
import './App.css'
import {Routes , Route} from "react-router-dom"
import Photographia from './pages/Photographia';
import DetailsPage from './pages/DetailsPage';
import EventPage from './pages/EventPage.jsx';
import TriveeeaLogin from './pages/TriveeeaLogin';
import Triveeea from './pages/Triveeea';
import TriveeeaID from './pages/TriveeeaID';
import PhotographiaAdmin from './pages/photographiaAdmin';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Photographia />} />
        <Route path="/photographia-login" element={<Photographia/>}/>
        <Route path='/DetailsPage/:uniqueId' element={<DetailsPage/>}/>
        <Route path='/EventPage' element={<EventPage/>}/>
        <Route path='/TriveeeaID' element={<TriveeeaID/>}/>
        <Route path='/TriveeeaLogin' element={<TriveeeaLogin/>}/>
        <Route path='/Triveeea' element={<Triveeea/>}/>
        <Route path='/photographia-admin' element={<PhotographiaAdmin/>}/>

      </Routes>
    </>
  )
}

export default App;
