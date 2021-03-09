import React, {useEffect, useState} from 'react';
import Layout from "components/Layout"

export default function Home() {
  return (
    <Layout fullCourt>
      <section>
        <h1 className="page-title">The Public Pickleball Courts in Northwest Philadelphia</h1>

        <div className="actions">
          <Button url="/directions">Get Directions</Button>
        </div>
      </section>

      <section>
        <LearnMeetCompete />        
      </section>

      <section className="nvz">
        <h2>What to expect?</h2>
        <p>There are lots of players at Water Tower wanting to play, so court availability is limited.  To keep the flow going and to vary types of play we’ve designed the Next to Play and Special Formats systems.</p>
        
        <div className="actions">
          <Button url="/playing">Learn more about playing</Button>
        </div>
      </section>
      <section className="nvz">
        <h2>When to Play?</h2>
        <p>Play anytime.  The courts are permanent and the lights allow play to continue most nights.  Check the schedule for activities that match you best.  </p>
        
        <div className="actions">
          <Button url="/schedule">Check Schedule</Button>
        </div>
      </section>
      <section></section>
      <section></section>
      
    </Layout> 
  );
}


function Button({children}) {
  return(
    <button className="btn">{children}</button>
  )
}

function LearnMeetCompete() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playing, setPlaying] = useState(true)

  const timer = React.useRef(null)

  const switchTo = (value) => {
    setCurrentIndex(value)
    setPlaying(false)
  }
  
  React.useEffect(() => {
    if (playing) {
      clearInterval(timer.current)
      timer.current = setInterval(() => {
        setCurrentIndex((prev) => prev === 2 ? 0 : prev + 1)
      },5000)
    } else {
      clearInterval(timer.current) 
    }

    return () => clearInterval(timer.current) 
  },[playing])

  return(
    <div className="tabbed">
      <nav className="tabbed-nav">
        <button className={`tabbed-nav-button ${currentIndex === 0 ? `is-active` : ''}`} onClick={() => switchTo(0)}>Learn.</button>
        <button className={`tabbed-nav-button ${currentIndex === 1 ? `is-active` : ''}`} onClick={() => switchTo(1)}>Meet.</button>
        <button className={`tabbed-nav-button ${currentIndex === 2 ? `is-active` : ''}`} onClick={() => switchTo(2)}>Compete.</button>
      </nav>

      <div className={`tabbed-section ${currentIndex === 0 ? `is-active` : ''}`}>
        <blockquote>Whether you are just begining or a pro, Water Tower Pickleball is the place to practice and develop your skills in clinics and drill sessions.</blockquote>

        <div className="actions as-centered">
          <Button url="/learn">Learn to Play</Button>
          <Button url="/practice">Practice</Button>
        </div>
      </div>

      <div className={`tabbed-section ${currentIndex === 1 ? `is-active` : ''}`}>
        <blockquote>Get to know more people through social play. We are friendly bunch that plays hard and has fun.  Join us anytime for play, make friends, and extend your social time at nearby establishments.</blockquote>

        <div className="actions as-centered">
          <Button url="/playing">When to Play</Button>
        </div>
      </div>

      <div className={`tabbed-section ${currentIndex === 2 ? `is-active` : ''}`}>
        <blockquote>Put it all on the line in competitive formats.  Whether a quick one night round robin or a league spread over months, Water Tower Pickleball provides opportunities for players of <strong>all skill levels to test their abilities against other players</strong> in organized formats.</blockquote>

        <div className="actions as-centered">
          <Button url="/next-to-play">Special Formats</Button>
          <Button url="/schedule">Schedule</Button>
        </div>
      </div>
    </div>
  )
}