import { login } from "../api/auth/login.js"



export function setLoginFormListener() {
const form = document.querySelector("#loginForm");

if (form) {
form.addEventListener("submit", (event) => {
event.preventDefault()
const form = event.target;
const formData = new FormData(form);
const profile = Object.fromEntries(formData.entries())


//API 
login(profile)

})
}
}