import Head from 'next/head'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const initialOptions = {
  "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
  "currency": "USD",
  "disable-funding": "card"
};

const checkoutConfigs = {
  // Sets up the transaction when a payment button is clicked
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '77.44' // Can reference variables or functions. Example: `value: document.getElementById('...').value`
        }
      }]
    });
  },

  // Finalize the transaction after payer approval
  onApprove: function(data, actions) {
    return fetch("/api/process-payment/?orderID=" + data.orderID)
    .then(function(res) {
      return res.json()
    })
    .then(function() {
      window.location.assign('/subscription');
    })
  }
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Paypal Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PayPalScriptProvider options={initialOptions}>
        <main>
          <h2>Checkout</h2>
          <PayPalButtons { ...checkoutConfigs} />
        </main>
      </PayPalScriptProvider>
    </>
  )
}