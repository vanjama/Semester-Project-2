import { API_AUCTION_URL } from "../constants.js";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
const registerURL = API_AUCTION_URL + action;
const body = JSON.stringify(profile)

const response = await fetch(registerURL, {
    headers: {
        "Content-type": "application/json"  
    },
    method,
    body: JSON.stringify(profile)
})

const result = await response.json()
alert("You are now registered")
return result
}
