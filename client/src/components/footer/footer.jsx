import React from 'react';
import "./footer.css";
import instagram from '../../assets/images/contact/instagram.webp'
import youtube from '../../assets/images/contact/youtube.webp'
import email from '../../assets/images/contact/email.webp'
import blog from '../../assets/images/contact/blog.webp'
import telegram from '../../assets/images/contact/telegram3.png'
import { TbBrandTelegram } from 'react-icons/tb';


export default function Footer() {
    return(
        <>
            <center className='heading-primary--sub-skyblue'id="contact">FOLLOW US ON</center>
            <div className="contact-icons">
                <a rel="noreferrer" href="https://www.instagram.com/ieeesitsb/" target="_blank"><img alt="insta" src={instagram} className="con-icons"></img></a>
                <a rel="noreferrer" href="https://www.youtube.com/channel/UCPatXnxDMcEDlFEQKX3q3rg" style={{"marginTop":"2vh"}} target="_blank"><img alt="youtube" src={youtube} className="con-icons"></img></a>
                <img alt="email" src={email} className="con-icons" data-tip="ieee2021.22@gmail.com"></img>
                <a rel="noreferrer" href="https://ieeesit.blogspot.com/?m=1" target="_blank"><img alt="blog" src={blog} className="con-icons"></img></a>
                <a rel="noreferrer" href="https://t.me/ieeesitsb" target="_blank"><img alt="telegram" src={telegram}className="con-icons"></img></a>


            </div>
            <center className='footer-p' style={{"color":"#b7b4b4","marginTop":"2vh"}}>All rights reserved &#169; IdEEEas, IEEE SIT SB</center>

            </>
    );
}