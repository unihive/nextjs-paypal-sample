This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It implements Paypal's Checkout and Subscription flow.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Paypal Client ID and Secret
Make sure you modify `.env.production` and `.env.development` files with the keys from paypal'd developer portal. To learn more refer to Paypal's documentation [https://developer.paypal.com/](https://developer.paypal.com/)

## Subscription's plan ID
To use subscription you need to modify `/pages/subscription/index.js` with your `plan_id`. To create a plan for development use Paypal's sandbox dashboard  [https://www.sandbox.paypal.com/](https://www.sandbox.paypal.com/)