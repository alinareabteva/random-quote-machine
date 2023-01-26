import { getRequest } from "./base-api-requests";
import { QUOTES_SERVER, API_KEY } from "./constants";

export const fetchQuote = (id) => {
    return getRequest(`${QUOTES_SERVER}/quote/${id}?key=${API_KEY}`)   
};
  
export const getQuotesQuantity = () => {
    return getRequest(`${QUOTES_SERVER}/quotes/quantity?key=${API_KEY}`)   
};