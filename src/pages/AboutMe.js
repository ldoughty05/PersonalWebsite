import { Link } from 'react-router-dom';
import './AboutMe.css';
import headshot from './PixelArtLuke.png';
import earthboundBattle from './EarthboundBattle.gif'
import React, { useState, useEffect } from 'react';

const topicLabels = ["Hobbies", "Resume", "Contact"];

function useFocusCardIndex() {
  const [focusCard, setFocusCard] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      let zeroIndexArea = 500;
      let scrollPosition = window.scrollY;
      let windowHeight = window.innerHeight;
      /*I might want to use the scroll height of AboutMe-body instead*/
      let documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition <= zeroIndexArea) {
        setFocusCard(0);
      } else {
        let scrollPercentage = ((scrollPosition - zeroIndexArea) / (documentHeight - windowHeight - zeroIndexArea));
        let totalCards = topicLabels.length;
        let cardHeightPercentage = 1 / (totalCards - 1);
        let focusedCardIndex = Math.floor(scrollPercentage / cardHeightPercentage) + 1;
  
        setFocusCard(focusedCardIndex);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return focusCard;
}

const TopicCardGenerator = () => {
  const focusCard = useFocusCardIndex();

  let topicCards = topicLabels.map((label, index) => (
    <TopicCard key={index} id={index} label={label} className={focusCard === index ? "focused-card" : ""}/>
  ))

  return topicCards;
}

const TopicCard = ({id=0, label="", className=""}) => {
    /* Maybe I could make this the shelf instead, and I imput an array of labels and it makes a card for each label 
    and its easier to know how many card there are for my scrolling feature*/

  return (
    <div className={'TopicCard-container ' + className} >
      <div className='TopicCard-padding'>
      <div className='TopicCard-color'>
        <CheckeredArea
          checker_size={15}
          patternID={label}
        />
      </div>
      </div>
      <div className='TopicCard-overlay'>
        <div className='TopicCard-content'>
            <h3>{label}</h3>
        </div>
      </div>
    </div>
  )
}

const CheckeredArea = ({patternID="", checker_size=50}) => {
  return (
    <svg className='checker-pattern-svg'>
      <pattern id={patternID} width={2 * checker_size} height={2 * checker_size} patternUnits="userSpaceOnUse" >
        <rect className="checker" x="0" width={checker_size} height={checker_size} y="0"/>
        <rect className="checker" x={checker_size} width={checker_size} height={checker_size} y={checker_size}/>
      </pattern>
      
      <rect x="0" y="0" width="100%" height="100%" fill={"url(#" + patternID + ")"} />
      
    </svg>
  );
}

const PageText = () => {
    return (
    <>
      <div className='AboutMe-body-page'>
        <p>
          In my free time I really enjoy lifting weights. Working out is something
          I can do alone any time, or I can go there to hang out with friends. I am a
          member of my school's Barbell Club. <br/><br/>
          Current Weight: 160lbs <br/>
          Bench Max: 165lbs <br/>
          Squat Max: 235lbs <br/>
          Deadlift Max: 225lbs (I rarely deadlift) <br/>
          Muscle Up Rep Max: 3
        </p>
        <p>
          My all time favorite video game is called Earthbound. It is about a kid named 
          Ness who saves the world from an alien invasion. It is hillariously unserious 
          which is why I love it. The layout of this page is inspired by Earthbound's 
          battle GUI. <br/><br/>
          <img src={earthboundBattle} alt="Gif showing the battle GUI from Earthbound"/>
        </p>
      </div>

      <div className='AboutMe-body-page'>
        <p>
          <h1> Work Experience and Involvement</h1>
          <strong>Huskertech, IT Assistant</strong>, Lincoln, NE 	<i>January 2024 – Present</i> <br/>
          •	Providing technical support to students and faculty/staff by email, phone, support tickets, or in person.<br/>
          •	Troubleshooting problems with software, operating systems, computer hardware, and network connections.<br/>
          •	Answering phone calls and providing excellent customer service.<br/><br/>
          <strong>Undergraduate Research</strong>, Lincoln, NE 	<i>January 2024 – Present</i><br/>
          •	Designing a machine learning model to detect damage to agricultural infrastructure from severe weather.<br/>
          •	Automating building a training dataset from satellite imagery.<br/><br/>
          <strong>Aerospace Club: Experimental Payloads & Lunabotics teams</strong>, Lincoln, NE	<i>August 2023 – Present</i><br/>
          •	Developing payloads for a cube satellite and a high-altitude weather balloon.<br/>
          •	Build a rover in partnership with NASA to construct berms on a simulated lunar surface.<br/>
          •	Volunteering at outreach programs inspiring local youth to get involved in STEM.<br/><br/>
          <strong>Vex Robotics Team</strong>, Lincoln, NE	<i>August 2023 – Present</i><br/>
          •	Implement autonomous robot locomotion requiring complex logic under hardware constraints.<br/>
          •	Build innovative robots to compete with other universities and outperform others in competitions.<br/><br/>
          <strong>Maintenance Specialist</strong>, St. Charles Park District, St. Charles, IL	<i>May 2024 – August 2024 Seasonal</i><br/>

        </p>
        <p>
          <h1>Education</h1>
          <strong>University of Nebraska – Lincoln</strong>, Lincoln, NE <br/>
          Bachelor of Science in Software Engineering<br/>
          •	University Honors Program <br/>
          •	4.0 GPA <br/>
        </p>
        <p>
        <h1>Honors and Awards</h1>
          <strong>Boy Scouts of America – Eagle Scout</strong>	<i>August 2013 – May 2023</i><br/>
          •	Led and organized all troop activities for six months as Senior Patrol Leader.<br/>
          •	Planned and oversaw a service project to repair and improve a 500ft fence around a historic farm. <br/>
          •	Recruited and managed volunteers as well as improvising effective long-term solutions to unforeseen roadblocks.<br/>
        </p>
      </div> 

      <div className='AboutMe-body-page'>
        <p>
          <h1>Let's talk!</h1>
          luke.doughty@me.com <br/><br/>
          www.linkedin.com/in/lukedoughty <br/><br/>
          www.github.com/ldoughty05

        </p>
      </div>
    </>)
}

const AboutMe = () => {
    return (
      <div className="AboutMe">
          <div className='AboutMe-black-bar'>
            <Link to="/" className='BackLink'>&lt; Back</Link>
          </div>
          <div className='AboutMe-battle-backdrop'>
            <CheckeredArea
              checker_size={30}
              patternID={'AboutMe-battle-backdrop-checker-pattern'}
            />
            <img src={headshot} className='AboutMe-headshot' alt="Headshot"></img>
          </div>
          <div className='TopicCard-shelf-container'>
            <div className='TopicCard-shelf'>
                <TopicCardGenerator/>
            </div>
          </div>
          <div className='AboutMe-body-container'>
            <CheckeredArea
              checker_size={15}
              patternID={'AboutMe-body-checkers-pattern'}
            />
            <div className='AboutMe-body'>
              <div className='AboutMe-body-padding'>
                <PageText />
              </div>
            </div>
            
          </div>
          <div className='AboutMe-top-text-box-container'>
            <div className='AboutMe-top-text-box'>
              <h1 className='AboutMe-text-box-label'>Luke Doughty</h1>
              <p>Hello! I’m a software developer and a computer vision researcher. 
                Check out what I’ve been working on!</p>
            </div>
          </div>
          
      </div>
    );
  };
  
export default AboutMe;