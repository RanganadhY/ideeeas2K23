
import './App.css'
import {Routes , Route} from "react-router-dom"

import GenerateUniqueIds from './pages/generateUniqueIds'

import Photographia from './pages/PhotographiaLogin';
import DetailsPage from './pages/photographiaDetailsPage';
import EventPage from './pages/photographiaEventPage.jsx';
import PhotographiaAdmin from './pages/photographiaAdmin';

import TriveeeaLogin from './pages/TriveeeaLogin';
import TriveeeaEventPage from './pages/TriveeeaEventPage';
import TriveeeaDetails from './pages/triveeeaDetails';
import TriveeeaAdmin from './pages/triveeeaAdmin';


function App() {
  return (
    <>
      <Routes>
        <Route path='/generate-unique-ids' element={<GenerateUniqueIds/>}/>
        <Route path='/photographia-admin' element={<PhotographiaAdmin/>}/>
        <Route path="/photographia-login" element={<Photographia/>}/>
        <Route path='/DetailsPage/:id/:isEmail' element={<DetailsPage/>}/>
        <Route path='/photographia-event/:id/:isEmail' element={<EventPage/>}/>

        <Route path='/triveeea-details/:id' element={<TriveeeaDetails/>}/>
        <Route path='/triveeea-event' element={<TriveeeaEventPage/>}/>
        <Route path='/TriveeeaLogin/:uniqueId' element={<TriveeeaLogin/>}/>
        <Route path="/triveeea-admin" element={<TriveeeaAdmin/>}/>
      </Routes>
    </>
  )
}

export default App;
