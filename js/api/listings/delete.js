import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

const action = "/listings";
const method = "delete";


export async function removeListings(id) {
    if (!id) {
        throw new Error("Delete require a ID")
    }
    
    
    const removeListingsURL = `${API_AUCTION_URL}${action}/${id}`;

    const response = await authFetch(removeListingsURL, {
        method
    })

    return await response.json();
}

