const base_url = "https://api.coingecko.com/api/v3/";

export const trendingCryptosURL = () => `${base_url}search/trending`;

//CRYPTO MORE DETAILS, NAME, PRICE, DESCRIPTION, ETC
//GET/COINS/ID
export const coinDetailsURL = (coin_id) => `${base_url}coins/${coin_id}`;