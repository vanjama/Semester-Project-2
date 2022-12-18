export function listingsTemplate(postData) {
return `<div class="listing" id=${postData.id}>
${postData.title}
<button>log listings</button>
</div>`
}

export function listingsTemplateB(postData, parent) {
const post = document.createElement("div");
post.classList.add("listings")
post.innerText = postData.title;
const button = document.createElement('button')
post.append(button);

button.addEventListener("click", () => console.log(postData))


return listings;
}

export function renderlistingsTemplate(postData, parent) {
parent.innerHTML = listingsTemplateA(postData)

document.querySelector(".listings > button").addEventListener("click")

//parent.append(listingsTemplateB(postData))
}