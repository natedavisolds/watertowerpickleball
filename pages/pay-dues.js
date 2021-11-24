import React from 'react'
import Layout from "components/Layout"
import { loadStripe } from '@stripe/stripe-js'; 

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.stripe_public_key);

export default function PayDues({stripeSessionId}) {
  const [error, setError] = React.useState()

  // const redirectToStripe = async (event) => {
  //   if (!stripeSessionId) return
    
  //   const stripe = await stripePromise;
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: stripeSessionId,
  //   });

  //   if (result.error) {
  //     console.error(result.error)
  //     setError(result.error)
  //   }
  // }

  return (
    <Layout isModal>
      <section className="pay-dues">
        <header>
          <div>Your membership dues are crucial to pickleball at Water Tower.</div>
        </header>

        <p>Annual dues enable pickleball events, court improvements, and unified advocacy. We use the funds to:</p>

        <ul>
          <li>Install paddle racks for next to play system,</li>
          <li>Donate to Water Tower Advisory Board for facility upkeep,</li>
          <li>Buy equipment (like temporary nets),</li>
          <li>Costs associated with securing permits (like liability insurance),</li>
          <li>And much more.</li>
        </ul>

        <p>
          2021 season is ending.  You no longer need to pay dues.
        </p>
        <p>Note: you only need to pay once per year.  If your meetup profile says 'Paid until Dec 31, 2021' then you don't need to pay here. If you have already paid, contact us and we will set it straight.</p>
      </section>
    </Layout> 
  );
}

// export async function getServerSideProps(context) {
//   const hostname = context?.req?.headers?.host

//   if (hostname === undefined) { return }
   
//   const protocal = hostname.includes("localhost") ? `http://` : `https://`

//   const stripePublicKey = process.env.STRIPE_KEY

//   const stripe = require('stripe')(stripePublicKey) 

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: '2021 Annual Dues',
//           },
//           unit_amount: 3000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${protocal}${hostname}/dues-paid`,
//     cancel_url: `${protocal}${hostname}/dues-unpaid`,
//   });

//   // Pass data to the page via props
//   return { props: { stripeSessionId: session.id } }
// }