import React from 'react'
import '../cards/cards.css'
import { cardData } from './cardData'
import webifyImg from "C:/Users/Anagha/Desktop/Ideas 2k23/ideeeas2K23\/client/src/assets/images/webify1.webp"
function cards(props) {
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
                        <button>REGISTER NOW</button>
                    </div>
                </div>
            </div>
           
        </div>
         ))};
          </>
    )
   
}

export default cards
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


