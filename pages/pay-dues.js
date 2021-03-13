import React from 'react'
import Layout from "components/Layout"
import { loadStripe } from '@stripe/stripe-js'; 

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.stripe_public_key);

export default function PayDues({stripeSessionId}) {
  const [error, setError] = React.useState()

  const redirectToStripe = async (event) => {
    
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: stripeSessionId,
    });

    if (result.error) {
      console.error(result.error)
      setError(result.error)
    }
  }

  return (
    <Layout isModal>
      <section className="pay-dues">
        <header>
          <div>Your membership dues are crucial to pickleball at Water Tower.</div>
        </header>

        <p>Annual dues enable pickleball events, court improvements, and unified advocasy. We use the funds to:</p>

        <ul>
          <li>Install paddle racks for next to play system,</li>
          <li>Donate to Water Tower Advisory Board for facility upkeep,</li>
          <li>Buy equiptment, like temporary nets,</li>
          <li>Purchase Liability Insurance,</li>
          <li>Costs associated with securing permits, like liability insurance,</li>
          <li>And much more.</li>
        </ul>

        <p>
          <a href="https://www.meetup.com/Water-Tower-Pickleball/" role="link" className="btn btn-inverted">Pay on Meetup</a>{' '}
          <button role="link" className="btn btn-inverted" onClick={redirectToStripe}>Pay on Stripe</button>
        </p>
        <p>Note: you only need to pay on once per year.  If you have already paid, contact us and we will set it straight.</p>
      </section>
    </Layout> 
  );
}

function Button({children,inverted=false}) {
  return(
    <button className={`btn ${inverted ? 'btn-inverted' : ''}`}>{children}</button>
  )
}

export async function getServerSideProps(context) {
  const hostname = context.headers.host
  const stripePublicKey = process.env.STRIPE_KEY

  const stripe = require('stripe')(stripePublicKey) 

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: '2021 Annual Dues',
          },
          unit_amount: 3000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${hostname}/dues-paid`,
    cancel_url: `${hostname}/dues-unpaid`,
  });

  // Pass data to the page via props
  return { props: { stripeSessionId: session.id } }
}