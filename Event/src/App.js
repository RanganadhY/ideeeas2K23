
import './App.css'
import {Routes , Route} from "react-router-dom"
import Photographia from './pages/Photographia';
import DetailsPage from './pages/DetailsPage';
import EventPage from './pages/EventPage.jsx';


import TriveeeaLogin from './pages/TriveeeaLogin';
import TriveeeaEventPage from './pages/TriveeeaEventPage';
import TriveeeaDetails from './pages/triveeeaDetails';
import PhotographiaAdmin from './pages/photographiaAdmin';
import TriveeeaAdmin from './pages/triveeeaAdmin';


function App() {
  return (
    <>
      <Routes>
        <Route path="/photographia-login" element={<Photographia/>}/>
        <Route path='/DetailsPage:uniqueId' element={<DetailsPage/>}/>
        <Route path='/EventPage' element={<EventPage/>}/>
        <Route path='/triveeea-details/:id' element={<TriveeeaDetails/>}/>
        <Route path='/triveeea-login' element={<TriveeeaLogin/>}/>
        <Route path='/triveeea-event' element={<TriveeeaEventPage/>}/>
        <Route path='/photographia-admin' element={<PhotographiaAdmin/>}/>
        <Route path="/triveeea-admin" element={<TriveeeaAdmin/>}/>
      </Routes>
    </>
  )
}

export default App;
