import  {getHeaders, getUrl} from '../../utils/paypal'; 

const requestOptions = {
  method: 'POST',
  headers: getHeaders(),
  redirect: 'follow'
};

export default async function handler(req, res) {
  // You can take additional actions on your server while you create a subscription on you server side
  const response = await fetch(getUrl(`/v2/checkout/orders/${req.query.orderID}/capture`), requestOptions)
  const data = await response.json()
  res.status(200).send(data)
}
