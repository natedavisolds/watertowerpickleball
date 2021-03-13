import Link from "next/link"
import Head from "next/head"

const siteTitle = "Water Tower Pickleball"

const Header = ({title, withNav=false}) =>
  <>
    <Head>
      <title>{title !== undefined ? `${title} | ${siteTitle}` : siteTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="site-header">
      <div className="site-header__viewarea">
        <section className="site-brand"><a href="/" className="primary-nav-item"><strong>Water Tower</strong> Pickleball</a></section>

        { withNav && <Nav /> }
      </div>
    </header>
  </>

export default Header

function Nav() {
  return(
    <nav className="site-nav">
      <Link href="/next-to-play" className="primary-nav-item">Playing</Link>
      <Link href="/schedule" className="primary-nav-item">Schedule</Link>
    </nav>
  )
}