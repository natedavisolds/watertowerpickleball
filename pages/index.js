import React, {useState} from 'react';
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
      </div>
    </section>
  )
}