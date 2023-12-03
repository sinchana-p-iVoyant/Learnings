// 6. Modifying Element Attributes

const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

console.log(spanHi.getAttribute("id"));
console.log(spanHi.getAttribute("title"));

console.log(spanHi.id);
console.log(spanHi.title);

//  ---

spanHi.setAttribute("id", "new-id")
console.log(spanHi.id);

// --- or ---

spanHi.id = "sdfsdf"
console.log(spanHi.id);

// --- remove attribute ----

spanHi.removeAttribute("title")
spanHi.removeAttribute("id")