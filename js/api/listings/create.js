import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

const action = "/listings";
const method = "get";


export async function createListings(postData) {
    const createListingsURL = API_AUCTION_URL + action;

    const response = await authFetch(createListingsURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}