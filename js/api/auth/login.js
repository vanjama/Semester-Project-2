import { API_AUCTION_URL } from "../constants.js";
import * as storage from "../../storage/index.js"

const action = "/auth/login";
const method = "post";

export async function login(profile) {
const loginURL = API_AUCTION_URL + action;
const body = JSON.stringify(profile)

const response = await fetch(loginURL, {
    headers: {
        "Content-type": "application/json"  
    },
    method,
    body: JSON.stringify(profile)
})

const { accessToken, ...user } = await response.json()


storage.save("token", accessToken)

storage.save("profile", user)

alert("You are now logged in")
}