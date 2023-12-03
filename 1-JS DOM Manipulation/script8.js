// 8. Modifying Element Classes

const spanHi = document.querySelector("#hi")

spanHi.classList.add("new-class-added")
// class="hi1 hi2 new-class-added"

spanHi.classList.remove("hi1")
// class="hi2 new-class-added"

spanHi.classList.toggle("hi3-toggled")
// it removes the className if present, else add that className
// class="hi2 new-class-added hi3-toggled"

spanHi.classList.toggle("hi3-toggled")
// class="hi2 new-class-added"

console.log(spanHi.classList);
// DOMTokenList(2) ['hi2', 'new-class-added', value: 'hi2 new-class-added']
// 0: "hi2"
// 1: "new-class-added"

// length: 2
// value: "hi new-class-added"

spanHi.classList.toggle("hi3-toggled", false)

