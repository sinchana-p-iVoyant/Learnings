// 4. Modifying Element HTML: only way
// "innerHTML"
//      To render HTML inside of a div/ any element

// const body = document.body
// const div = document.createElement("div")

// // div.innerText = "<strong>Hello World</strong>"
// div.innerHTML = "<strong>Hello World</strong>"

// body.append(div)

// --------- or -------

const body = document.body
const div = document.createElement("div")
const strong = document.createElement("strong")
strong.innerText = "Hello World"

// div.innerText = "<strong>Hello World</strong>"
// div.innerHTML = "<strong>Hello World</strong>"

body.append(div)
div.append(strong)

