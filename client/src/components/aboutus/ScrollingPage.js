import React from 'react';
import '../aboutus/ScrollingPage.css';
import About from '../../pages/about'
import First from '../../components/aboutus/First'
import Header from '../header/Header';

class ScrollingPage extends React.Component {
  render() {
    return (
      <div className="scrolling-page">
        <Header />
        <div className="full-screen-section">
          <First />
        </div>
        <div className="reveal-section">
           <About />
        </div>
      </div>
    );
  }
}

export default ScrollingPage;
