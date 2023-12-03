//1. v - 19

//✨ step 1 :
const createSlice = require('@reduxjs/toolkit').createSlice

// 1. state
const initialState = {
    numOfCakes : 10
}

//✨ step 2 :
const cakeSlice = createSlice({

    name : 'cake',          // name for this slice.
    initialState,
    reducers : {
        ordered : (state) => {
            state.numOfCakes--
        },
        restocked : (state, action) => {
            state.numOfCakes += action.payload
        },       
    },
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions



// ---------------------------------------------------------------------


// //1. v - 19

// // since,we r still in node.js environment. We can't use es module imports
// // So, we have to use require keyword

// //✨ step 1 :
// const createSlice = require('@reduxjs/toolkit').createSlice

// // 1. state
// const initialState = {
//     numOfCakes : 10
// }

// // createSlice ---> this function accepts an object as an argument.
// // createSlice ---> automatically creates an "action", with the same name as of "action-creatrors"

// // 2. reducer (inside createSlice)

// // createSlice ---> this genertes actions & reducers
// // perform direct mutations on the state & that is completely ok with "immer" being used under the hood

// //✨ step 2 :
// const cakeSlice = createSlice({
// //  we have to specify 3 properties.
// //  we can use esx shorthand and specify just "initialState", if the key and value both r the same.

//     name : 'cake',          // name for this slice.
//     initialState,
//     reducers : {
//         // within the object we specify the individual state transitions 
        
//         // We specify. "ordered" as a key, this is going to be a function
//         // ordered: receives 2 arguments: state, action.
//         // Similar to the "Reducer" function in "Redux" Demo earlier.
//         // Re-writing the logic with createSlice here,
//         // ordered : (state, action) => {}

//         // ✨ What is great about redux toolkit now,
//         // 1. We don't have to explicitly return the "new State"
//         // 2. We can directly mutate the state 

//         // this 2. is possible, bcz createSlice under the hood uses the immer library, we had seen earlier.
//         // Redux Toolkit handles the state updation on ur behalf.

//         ordered : (state) => {
//             state.numOfCakes--
//         },
//         restocked : (state, action) => {
//             state.numOfCakes += action.payload
//         },       
//     },
// })

// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions


