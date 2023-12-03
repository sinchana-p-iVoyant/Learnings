// 5. Removing Elements:
// a. remove()
// b. removeChild()

const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove()

div.append(spanBye)     // add it back

// div.removeChild(spanHi)

// --or

spanHi.remove()

