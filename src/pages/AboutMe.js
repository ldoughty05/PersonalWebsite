import { Link } from 'react-router-dom';
import './AboutMe.css';
import headshot from './PixelArtLuke.png';
import earthboundBattle from './EarthboundBattle.gif'
import React, { useState, useEffect, useRef } from 'react';

const topicLabels = ["Hobbies", "Resume", "Contact"];


export const useIntersection = (element, rootMargin) => {
  //Returns whether or not 
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, [element, rootMargin]);

  return isVisible;
};
// <SetFocusCardIndexOnVisibile index=0>

const DummyElement = ({ callbackFn }) => {
  //Triggers 'callbackFn' when this div is visible on screen.
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  useEffect(() => {
    if (isVisible) {
      callbackFn();
    }
  });
  return <div ref={triggerRef} />;
}


const TopicCardGenerator = ({ focusCardIndex }) => {
  let topicCards = topicLabels.map((label, index) => (
    <TopicCard key={index} id={index} label={label} className={focusCardIndex === index ? "focused-card" : ""}/>
  ))

  return topicCards;
}


const TopicCard = ({id=0, label="", className=""}) => {
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


const PageText = ({ setFocusIndex }) => {
    return [(
      <div className='AboutMe-body-page'>
        <DummyElement callbackFn={() => setFocusIndex(0)}/>
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
          The layout of this page is inspired by my all time favorite video game, Earthbound. 
          It is a turn based RPG about a kid named Ness who saves the world from an alien invasion. 
          The story and charaters are hillariously unserious which is why I love it. The battle GUI
          features unique, colorful background animations and music which differ for each enemy type.
          I tried to reflect the general layout of the battle GUI for this page. The image below is 
          from the game. How did I do?<br/><br/>
          <img src={earthboundBattle} alt="Gif showing the battle GUI from Earthbound"/>
        </p>
        <DummyElement callbackFn={() => setFocusIndex(0)}/>
      </div>
    ),(
      <div className='AboutMe-body-page'>
        <DummyElement callbackFn={() => setFocusIndex(1)}/>
        <p>
          <h1> Work Experience and Involvement</h1> {/* TODO: Not supposed to keep extra stuff in my p's. Fix this later*/}
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
        <DummyElement callbackFn={() => setFocusIndex(1)}/>
      </div> 
    ),(
      <div className='AboutMe-body-page'>
        <DummyElement callbackFn={() => setFocusIndex(2)}/>

        <p>
          <h1>Let's talk!</h1>
          luke.doughty@me.com <br/><br/>
          <a href='https://www.linkedin.com/in/lukedoughty'>linkedin.com/in/lukedoughty</a> <br/><br/>
          <a href='https://www.github.com/ldoughty05'>github.com/ldoughty05</a>
        </p>
      </div>
    )];
}


const AboutMe = () => {
  const [focusIndex, setFocusIndex] = useState(0); //Should I keep prop drilling this or instead should I establish a React Context?
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
              <TopicCardGenerator focusCardIndex={focusIndex} />
          </div>
        </div>
        <div className='AboutMe-body-container'>
          <CheckeredArea
            checker_size={15}
            patternID={'AboutMe-body-checkers-pattern'}
          />
          <div className='AboutMe-body'>
            <div className='AboutMe-body-padding'>
              <PageText setFocusIndex={setFocusIndex} />
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