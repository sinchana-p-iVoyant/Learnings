const redux = require('redux')  
// IMPORT HELPER FUNCTION
const bindActionCreators = redux.bindActionCreators

const createStore = redux.createStore

const CAKE_ORDERED   = 'CAKE_ORDERED'   ;                                           
const CAKE_RESTOCKED = 'CAKE_RESTOCKED' ;                                           
const ICECREAM_ORDERED = 'ICECREAM_ORDERED' ;
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED' ;


// In redux the convention is to use a property called payload, for any additional information u want to send. This is for every ACTION in ur code base.

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        // quantity: 1 
        payload: qty,
    }       
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        // quantity: qty,
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

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20,
}

// action.type
// action.payload

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            // return new state
            return {
                ...state,                              
                numOfCakes: state.numOfCakes - action.payload       
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                // remember in React we don't directly mutate "state".
                numOfCakes : state.numOfCakes + action.payload
            } 
        case ICECREAM_ORDERED:
            // return new state
            return {
                ...state,                              
                numOfIceCreams: state.numOfIceCreams - action.payload       
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                // remember in React we don't directly mutate "state".
                numOfIceCreams : state.numOfIceCreams + action.payload
            } 
                
        default:
            return state    
    }
}

const store = createStore(reducer)

console.log('Initial State : ', store.getState())

const unsubscribe = store.subscribe(() => 
    console.log(' 💫 Updated State: ', store.getState())
)     

const actions = bindActionCreators( { orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch )

// to dispatch the action:
actions.orderCake(5)
actions.restockCake(3)

actions.orderIceCream(5)
actions.restockIceCream(3)



unsubscribe()
store.dispatch(orderCake())

// o/p: of SINGLE STORE

// PS F:\REACT - REDUX PROJECTS\REDUX> node index4
// Initial State :  { numOfCakes: 10, numOfIceCreams: 20 }
// 💫 Updated State:  { numOfCakes: 5, numOfIceCreams: 20 }
// 💫 Updated State:  { numOfCakes: 8, numOfIceCreams: 20 }
// 💫 Updated State:  { numOfCakes: 8, numOfIceCreams: 15 }
// 💫 Updated State:  { numOfCakes: 8, numOfIceCreams: 18 }