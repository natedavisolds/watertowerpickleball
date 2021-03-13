const stripe = require('stripe')('sk_test_51ISsITHkDCvTlpCRwnY0TP3Q8r9NM4YHUqduRPLQp2F0mvZVBCar6cPLLNAfRGTXOe7kQYTLnjF3ApFTPRzxf0Bt00kZTpHt97')
const hostname = 'http://localhost:3000'

export default async (req, res) => {
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

  res.json({ id: session.id });
}