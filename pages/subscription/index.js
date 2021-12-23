import Head from 'next/head'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const initialOptions = {
  "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
  "currency": "USD",
  "intent": "subscription",
  "vault": true,
  "disable-funding": "card"
};


const subscriptionConfigs = {
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      "plan_id": "YOUR PLAN ID"
    });
  },
  onApprove: function(data, actions) {
    // here you can send data.subscriptionID to server's api using fetch
    console.log('You have successfully created subscription ' + data.subscriptionID);
  },
  onCancel: function(data) {
  }
}

export default function Subscription() {
  return (
    <>
      <Head>
        <title>Paypal Subscription</title>
      </Head>
      <PayPalScriptProvider options={initialOptions}>
        <main>
          <h2>Subscription</h2>
          <PayPalButtons { ...subscriptionConfigs} />
        </main>
      </PayPalScriptProvider>
    </>
  )
}