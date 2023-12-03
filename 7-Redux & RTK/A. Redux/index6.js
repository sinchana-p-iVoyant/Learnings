const redux = require('redux') 

const createStore = redux.createStore 
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

// redux library provide function called applyMiddleware --> used to apply Middleware 
const applyMiddleware = redux.applyMiddleware

// REDUX-LOGGER
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
// "logger" MIDDLEWARE

const CAKE_ORDERED   = 'CAKE_ORDERED'   ;                                           
const CAKE_RESTOCKED = 'CAKE_RESTOCKED' ;                                           
const ICECREAM_ORDERED = 'ICECREAM_ORDERED' ;
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED' ;

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty,
    }       
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty,
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

const initialCakeState = {
    numOfCakes: 10,    
}

const initialIceCreamState = {
    numOfIceCreams: 10,    
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,                              
                numOfCakes: state.numOfCakes - action.payload       
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.payload
            }         
        default:
            return state    
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){ 
        case ICECREAM_ORDERED:
            return {
                ...state,                              
                numOfIceCreams: state.numOfIceCreams - action.payload       
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams + action.payload
            } 

        // For Every cake, they buy Give 1 ice-cream as offer. 
        case CAKE_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }                    
        default:
            return state    
    }
}

const rootReducer = combineReducers({ 
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// to the createStore function, we pass the 2nd parameter
// we can pass any number of middlewares, as our application requires.

// const store = createStore(rootReducer, applyMiddleware(logger))
const store = createStore(rootReducer)


console.log('Initial State : ', store.getState())

const unsubscribe = store.subscribe(() => 
    console.log(' 💫 Updated State: ', store.getState())
    // {}
    // we remove log statement, as we have the logger middleware.
)     

const actions = bindActionCreators( { orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch )

actions.orderCake(5)
actions.restockCake(3)

actions.orderIceCream(5)
actions.restockIceCream(3)


unsubscribe()
store.dispatch(orderCake())

// o/p: Using Middleware
// action CAKE_ORDERED @ 17:33:10.161
// prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
// action     { type: 'CAKE_ORDERED', payload: 5 }
// next state { cake: { numOfCakes: 5 }, iceCream: { numOfIceCreams: 10 } }


// o/p: Without Middleware
// PS F:\REDUX PROJECTS\REDUX> node index6
// Initial State :  { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 10 } }
//  💫 Updated State:  { cake: { numOfCakes: 5 }, iceCream: { numOfIceCreams: 9 } }
//  💫 Updated State:  { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 9 } }
//  💫 Updated State:  { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 4 } }
//  💫 Updated State:  { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 7 } }