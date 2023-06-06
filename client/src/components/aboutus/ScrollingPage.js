import React from 'react';
import '../aboutus/ScrollingPage.css';


import img1 from "../../assets/images/aboutuss/img1.jpeg"
import img2 from "../../assets/images/aboutuss/img2.jpg"
import img3 from "../../assets/images/aboutuss/img3.JPG"
import img4 from "../../assets/images/aboutuss/img4.jpeg"
import img5 from "../../assets/images/aboutuss/img5.jpeg"
import img6 from "../../assets/images/aboutuss/img6.jpeg"
import Header from '../header/Header.jsx';
import Footer from '../footer/footer.jsx'

class ScrollingPage extends React.Component {
  render() {
    return (
    <div className="mainpage">
      <div className='headd'>
      <Header />
      </div>
      <div className='firstpage'>
      <div className='aboutus'>
        <h1>About Us</h1>
      </div>
     
      <div className='twosections'>
        <div className='textcontents'>
          <h1>IEEE SIT SB</h1>
          <p className='paraieee'>IEEE SIT SB was established in the year 2002 under the inspiring leadership of Professor Basavarajaiah. The legacy was followed by the vision and direction of our mentors Dr. K V Suresh, Professor, Department of ECE and Dr. N R Sunitha, Professor, Department of CSE. Our current branch counsellors  Dr. K V Vishwanath, Professor, Department of ETE and Dr. Veena Karjagi, Associate Professor, Department of ECE  IEEE SIT SB have won a lot of laurels.
This is the only student branch from Bangalore Section to have been published in IEEE India Council Newsletter, 2019. 
IEEE SIT SB team is a force of diverse skills and expertise. The synergy of the team brings out the opportunity for every individual to explore, enhance and thereby strengthening the team.
Providing insights and opportunities of IEEE, we fervently organize various events, technical colloquiums and contests.
The WIE IEEE SIT SB, a wing under IEEE SIT SB supports all the innovation and technology of, for and by women through organizing various events.</p>
        </div>
        <div className='cards'>
          
               <img alt="us" src={img3} id="img3"></img>
               <img alt="us" src={img2} id="img2"></img>
               <img alt="us" src={img1} id="img1"></img>
          
        </div>
      
    </div>
    </div>
    <div className='secondpage'>
    <div className='twosections2'>
        <div className='textcontents2'>
          <h1>OUR COLLEGE</h1>
          <p className='paraieee'>Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds. Its motto 'work is worship' is ingrained into the minds of every student, thus creating an inclusive and empowering community for students that encourages growth and achievement. The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.</p>
        </div>
        <div className='cards2'>
          
               <img alt="us" src={img4} id="img4"></img>
               <img alt="us" src={img5} id="img5"></img>
               <img alt="us" src={img6} id="img6"></img>
          
        </div>
      </div>
    </div>
    <div className='footy'>
      <Footer/>
    </div>
    </div>
  );
 }
}

export default ScrollingPage;
