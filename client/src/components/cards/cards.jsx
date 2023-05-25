import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../cards/cards.css'
import { cardData } from './cardData'
import EventsPage from '../../pages/eventsPage'
function Cards(props) {

    const navigate = useNavigate();

    const navigateToEvents = () => {
        navigate("/:{props.id}");
    }
    return (
        <>
        {props.details.map(( value, index)=>(
        <div className='card-main'key={index}>
           
            <div className='cards-card-img' >
                <img src={value.img} alt='value.desc'></img>
                <div className='cards-card-body'>
                    <div className='cards-card-heading'>
                        {value.desc}
                    </div>
                    <div className='cards-card-btn'>
                        <button onClick={navigateToEvents}>REGISTER NOW</button>
                    </div>
                </div>
            </div>
           
        </div>
         ))};
          </>
    )
   
}

export default Cards
// export const cardData = [
//     {
//         img : webifyImg,
//         desc : ' web designing contest'
//     },
//     {
//         img : webifyImg,
//         desc : ' web designing contest'
//     },
//     {
//         img : webifyImg,
//         desc : ' web designing contest'
//     },
//     {
//         img : webifyImg,
//         desc : ' web designing contest'
//     },
//     {
//         img : webifyImg,
//         desc : ' web designing contest'
//     },
//     {
//         img : webifyImg,
//         desc : ' web designing contest'
//     },
// ];
// export default {cards,cardData}


