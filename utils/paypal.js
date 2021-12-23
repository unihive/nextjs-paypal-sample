const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
const host = process.env.PAYPAL_REST_URL;

export function getHeaders() {
  const headers = new Headers();
  headers.append("Authorization", "Basic " + Buffer.from(clientId + ":" + secret).toString('base64'));
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  return headers;
}

export function getUrl(endpoint) {
  return host + endpoint;
}