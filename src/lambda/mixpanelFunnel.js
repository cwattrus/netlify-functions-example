import fetch from "node-fetch";
import querystring from "querystring";

const API_ENDPOINT = 'https://mixpanel.com/api/2.0/funnels/?funnel_id=6321819&from_date=2019-07-01&to_date=2019-07-31&length=1&interval=31&on=(properties["$current_url"])';

exports.handler = async (event, context) => {
  const params = querystring.parse(event.body);
  const auth = params.auth || "";
  console.log(params);
  console.log(auth);
  return fetch(API_ENDPOINT, { headers: {
      "Accept": "application/json",
      "Authorization": "Basic " + "Y2U1NjBmNjYyODY5MDUwNjA1YTI2ZTQ0MWU5OTBmZTQ6"
    }
  })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data.data)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};