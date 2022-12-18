import { setRegisterFormListener } from "./handlers/register.js";
import { setLoginFormListener } from "./handlers/login.js";


import * as templates from "./templates/index.js"
import * as postMethods from "./api/listings/index"
import { renderPostTemplates } from "./templates/product.js"

const path = location.pathname;

if (path === '/login/') {
    setLoginFormListener()
} else if (path === '/register/') {
    setRegisterFormListener()
}


async function testTemplates() {
  const posts = await postMethods.getListings();
  const post = posts.pop()
  const container = document.querySelector("#product");
  renderPostTemplates(post, container);

}

testTemplates()