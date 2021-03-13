import React, {useEffect, useState} from 'react';
import Layout from "components/Layout"

export default function DuesPaid() {
  return (
    <Layout isModal>
      <section className="pay-dues">
        <header>
          <div>Thank you for paying your Water Tower Pickleball dues.</div>
        </header>

        <p>
          Please give us a couple of days to update your membership status.
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