import Layout from "components/Layout"
import Link from "next/link"

export default function DuesPaid() {
  return (
    <Layout isModal>
      <section className="pay-dues">
        <header>
          <div>Oops! There was a problem processing your dues.</div>
        </header>

        <p>
          Please contact an organizer to get it resolved. Or try again,
        </p>
        <p>
          <Link href="/pay-dues"><a className="btn btn-inverted">Pay Dues</a></Link>
        </p>
      </section>
    </Layout> 
  );
}

function Button({children,inverted=false}) {
  return(
    <button className={`btn ${inverted ? 'btn-inverted' : ''}`}>{children}</button>
  )
}