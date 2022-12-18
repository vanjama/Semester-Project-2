import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

const action = "/listings";
const method = "put";


export async function updateListings(postData) {
    if (!postData.id) {
        throw new Error("Error - update required ID")
    }
    
    
    const updateListingsURL = `${API_AUCTION_URL}${action}/${postData.id}`;

    const response = await authFetch(updateListingsURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}