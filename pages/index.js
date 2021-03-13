import React, {useEffect, useState} from 'react';
import Layout from "components/Layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout isModal>
      <PayDues />
    </Layout> 
  );
}

function PayDues() {
  return(
    <section className="pay-dues">
      <header>
        <div>Learn, meet, and compete with other pickleball players in Northwest Philadelphia.</div>
      </header>

      <div className="actions as-centered">
        <a href="https://www.meetup.com/Water-Tower-Pickleball/" className="btn btn-inverted">Join Meetup</a>
        <Link href="/pay-dues"><a className="btn btn-inverted">Pay Dues</a></Link>
      </div>
    </section>
  )
}

function Button({children,inverted=false}) {
  return(
    <button className={`btn ${inverted ? 'btn-inverted' : ''}`}>{children}</button>
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