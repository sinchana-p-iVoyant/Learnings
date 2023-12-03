// 7. Modifying Data Attributes

const spanHi = document.querySelector("#hi")
console.log(spanHi.dataset)

// dataset: a property
// -> which contains all of ur custom data attributes


console.log(spanHi.dataset.test); 
console.log(spanHi.dataset.longerName); 

spanHi.dataset.newName = "new-name"
console.log(spanHi.dataset.newName);






// -------- o/p: --------
// DOMStringMap
// { test: 'this is a test', 2: '2' }
// 2: "2"
// test: "this is a test"
// [[Prototype]]: DOMStringMap


// DOMStringMap {test: 'this is a test', 2: '2', longerName: 'longeeeerr'}2: "2" longerName: "longeeeerr" test: "this is a test"         [[Prototype]]: DOMStringMap