const redux = require('redux')  
// IMPORT HELPER FUNCTION
const bindActionCreators = redux.bindActionCreators

const createStore = redux.createStore

const CAKE_ORDERED   = 'CAKE_ORDERED'   ;                                           
const CAKE_RESTOCKED = 'CAKE_RESTOCKED' ;                                           

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

const initialState = {
    numOfCakes: 10,
    anotherProperty: 0
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
        default:
            return state    
    }
}

const store = createStore(reducer)

console.log('Initial State : ', store.getState())

const unsubscribe = store.subscribe(() => 
    console.log(' 💫 Updated State: ', store.getState())
)     

// - dispatchEvent(action)

// store.dispatch(orderCake())                            
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(3))


// bindActionCreators : takes 2 arguments
// bindActionCreators( < object > , < to_we_want_to_bind_it_to > )
const actions = bindActionCreators( { orderCake, restockCake }, store.dispatch )

// to dispatch the action:
actions.orderCake(5)

actions.restockCake(3)


unsubscribe()
store.dispatch(orderCake())

