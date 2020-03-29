import { parseCountry } from './utils';
const config = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    },
  }

  export const apiCall = (country) => fetch(`${process.env.REACT_APP_API_URL}?country=${parseCountry(country)}`, config);
