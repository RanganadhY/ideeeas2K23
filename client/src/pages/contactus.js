import React from 'react';
import "../css/contactus.css";
import us from "../components/contactus/us.svg"
import email from "../components/contactus/email.webp";
import phone from "../components/contactus/phone.png"

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/footer';
export default function Contactus() {
    return(
        
        <div id="contactUs">
            <div> <Header /></div>
        
        <center  className="c-head">CONTACT US</center>

        <div className='flex1'>
        <img alt="us" src={us} id="us"></img>

            <div className='flex2'>
                <div className='flex3'>
                    <div className='contact-card'>
                        <h3 className='name'>Chethan Baradwaj M</h3>
                        <h3 className='deets'>Chair, IEEE SIT SB</h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 96064 16541</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> chethanbaradwaj24@ieee.org</span></h3>
                    </div>
                    <div className='contact-card'>
                        <h3 className='name'>Prakruthi C</h3>
                        <h3 className='deets'>Chair, WIE IEEE SIT SB</h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 81473 82401</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> prakruthichalapathy@gmail.com</span></h3>
                    </div>
                </div>
                <div className='flex4'>
                    <div className='contact-card'>
                        <h3 className='name'>Shivaraj Karjagi</h3>
                        <h3 className='deets'>Vicechair, IEEE SIT SB</h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 97437 03243</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> shivarajkarjagi@ieee.org</span></h3>
                    </div>
                    <div className='contact-card'>
                        <h3 className='name'>Sneha N</h3>
                        <h3 className='deets'>Vicechair,WIE IEEE SIT SB </h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 93535 59069</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> snehaneelappagol@gmail.com</span></h3>
                    </div>
                </div>

            </div>

        </div >
        <div className='bottom'>
        <center  className="c-head">WebDev Team</center>
        <div className='flex5'>
        <div className='dev-card'>
                        <h3 className='dev-name'>Anvs Anudeep</h3>
                        <h3 className='dev-deets'>LEAD, WEB DEV IEEE SIT SB</h3>
                        <h3 className='dev-deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 63637 64172 </span></h3>
                        <h3 className='dev-deets'><img alt="email" src={email} className="deets-img"></img><span> anvsanudeep@gmail.com</span></h3>
        </div>
        <div className='dev-card'>
                        <h3 className='dev-name'>Ranganath</h3>
                        <h3 className='dev-deets'>PRO, IEEE SIT SB</h3>
                        <h3 className='dev-deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 70934 09340</span></h3>
                        <h3 className='dev-deets'><img alt="email" src={email} className="deets-img"></img><span> anvsanudeep@gmail.com</span></h3>
        </div>
        <div className='dev-card'>
                        <h3 className='dev-name'>Anagha N</h3>
                        <h3 className='dev-deets'>Member, IEEE SIT SB</h3>
                        <h3 className='dev-deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 78927 36753</span></h3>
                        <h3 className='dev-deets'><img alt="email" src={email} className="deets-img"></img><span> anagha2003.13@gmail.com</span></h3>
        </div>
        <div className='dev-card'>
                        <h3 className='dev-name'>Rishith P</h3>
                        <h3 className='dev-deets'>Member, IEEE SIT SB</h3>
                        <h3 className='dev-deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 78924 94498</span></h3>
                        <h3 className='dev-deets'><img alt="email" src={email} className="deets-img"></img><span> rishithp2003@gmail.com</span></h3>
        </div>
        
        </div>
        <div> <Footer /></div>

        </div>
        </div>
    );}