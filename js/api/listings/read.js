import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

const action = "/listings";


export async function getListings() {
    const updateListingsURL = `${API_AUCTION_URL}${action}`;

    const response = await authFetch(updateListingsURL)

    return await response.json();
}