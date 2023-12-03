// v - 20
// import "reducer" in this file

const configureStore = require('@reduxjs/toolkit').configureStore

// v - 22
const reduxLogger = require('redux-logger')

const cakeReducer = require('./features/cake/cakeSlice')
const icecreamReducer = require('./features/icecream/icecreamSlice')
const userReducer = require('./features/user/userSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    // this is where we specify all the reducers from slices that belong to features.
    reducer: {
        cake : cakeReducer,
        icecream : icecreamReducer,
        user: userReducer
    },
    // we assign an arrow function
    // this function receives another function as its argument i.e getDefaultMiddleware.
    // in the fun body we r going to implicitly return "getDefaultMiddleware" 
    // & concatenate the list with the logger middleware.
    // So, to the list of middleware we append logger middleware.

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store

// ----------------------------------------------------------------

// Simple Store for Cake Store

// const configureStore = require('@reduxjs/toolkit').configureStore
// const cakeReducer = require('./features/cake/cakeSlice')

// const store = configureStore({
//     // this is where we specify all the reducers from slices that belong to features.
//     reducer: {
//         cake : cakeReducer
//     },
// })

// module.exports = store
