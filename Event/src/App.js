
import './App.css'
import {Routes , Route} from "react-router-dom"
import Photographia from './pages/PhotographiaLogin';
import DetailsPage from './pages/photographiaDetailsPage';
import EventPage from './pages/photographiaEventPage.jsx';
import TriveeeaLogin from './pages/TriveeeaLogin';
import Triveeea from './pages/Triveeea';
import TriveeeaID from './pages/TriveeeaID';
import PhotographiaAdmin from './pages/photographiaAdmin';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<TriveeeaID />} />
        <Route path="/photographia-login" element={<Photographia/>}/>
        <Route path='/DetailsPage/:id/:isEmail' element={<DetailsPage/>}/>
        <Route path='/photographia-event/:id/:isEmail' element={<EventPage/>}/>
        <Route path='/TriveeeaID' element={<TriveeeaID/>}/>
        <Route path='/TriveeeaLogin/:uniqueId' element={<TriveeeaLogin/>}/>
        <Route path='/Triveeea' element={<Triveeea/>}/>
        <Route path='/photographia-admin' element={<PhotographiaAdmin/>}/>

      </Routes>
    </>
  )
}

export default App;
