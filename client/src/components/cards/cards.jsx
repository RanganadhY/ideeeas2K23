import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../cards/cards.css'
import { cardData } from './cardData'
import EventsPage from '../../pages/eventsPage'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Cards(props) {

    const navigate = useNavigate();

    const handleExplore = async(eventName) => {
            navigate(`/${eventName}`)
    }
    // console.log(props.id)
    // const navigateToEvents = () => {
    //     navigate("/:props.id");
    // }
    return (
        <>
        {props.details.map(( value, index)=>(
        <div data-aos="fade-up"className='card-main'key={index}>
           
            <div className='cards-card-img' >
                <img src={value.img} alt='value.desc'></img>
                <div className='cards-card-body'>
                    <div className='cards-card-heading'>
                        {value.desc}
                    </div>
                    <div className='cards-card-btn'>
                        <div className='cards-card-btn-body'> 
                      <button  onClick={() => handleExplore(value.name)}> EXPLORE</button>
                    </div>
                </div></div>
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


