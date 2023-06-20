import React from 'react';
import "./slider.css";
import essence from "../../assets/images/sponserers/essence-white.png"
import cocosland from "../../assets/images/sponserers/cocos land.png"
import icafe from "../../assets/images/sponserers/I Cafe 2.2 logo.png"
import computersociety from "../../assets/images/sponserers/computer society of india.png"
import nandini from "../../assets/images/sponserers/nandini.png";
import vishwasJewelers from "../../assets/images/sponserers/vishwas jewellers.png";
import kwikpic from "../../assets/images/sponserers/Kwikpic.jpg"
import aicteIdeaLab from "../../assets/images/sponserers/aicteIdeaLab.jpeg"
import taskade from "../../assets/images/sponserers/logo_taskade_white.png"
const colors = [essence,computersociety, nandini,icafe,vishwasJewelers,cocosland,kwikpic,taskade,aicteIdeaLab];
const links = ["https://essencethebakelab.in/","https://csiindia.org/","http://tumul.coop/","https://icafe22.business.site/","https://tinyurl.com/mprm2s6a","","https://www.kwikpic.in/landing/home","https://www.taskade.com/","https://idealnet.aicte-india.org/"]
// const titles = ["Our Title Sponsor","Our King Sponsor","Our Lord Sponsor", "Our Knight Sponsor","Our Knight Sponsor","Our Sponsor","Our Knight Sponsor"]
const ids=["computersociety","nandini","essence","icafe","vishwasjewelers","Kwikpic","Taskade","AICTE idea lab"]
const delay = 3000;

export default function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
	  <>
	  <center className='heading-secondary'><p >IDEEEAS 2K23 SPONSORERS</p></center>
    <div className="slideshow">
    <div
      className="slideshowSlider"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {colors.map((pic, index) => (
        <a key={index} rel="noreferrer" className="slide" href={links[index] }  target="_blank">
          {/* <h1 className='title'>{titles[index]}</h1> */}
          <div className='slider-container'>
          <img alt="slide" key={index} src={pic} className="slide-img" id={ids[index]}></img>
          </div>
        </a>
      ))}
    </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
	</>
  );
}

