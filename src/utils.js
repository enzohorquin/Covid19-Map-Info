export const parseCountry = (country) => parseUs(country.split("—")[0].trimEnd());
export const parseResponse = (data) =>({
        deaths: data.reduce((acc, item) => item.deaths + acc, 0),
        recovered: data.reduce((acc, item) => item.recovered + acc, 0),
        confirmed: data.reduce((acc, item) => item.confirmed + acc, 0)
    })

const parseUs = (country) => country === "United States of America" ? "US" : country;