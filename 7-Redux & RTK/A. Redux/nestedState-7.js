const { redux, createStore, bindActionCreators } = require("redux")
// npm i immer
const produce = require('immer').produce 

const initialState = {
    name: 'Sinchana',
    address: {
        street: '123 Main St',
        city: 'Dvg',
        state: 'MA'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case STREET_UPDATED :
            // return {
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // }

            // return produce(state, () => {})
            // state        ---->  1st argument is the "CURRENT STATE"=
            // () => {}     ---->  2nd argument is the function which receives, the "DRAFT" copy of the state.
            // wt immer allows us to do is   ---->  update this DRAFT state, as if state is MUTABLE.

            // immer simplifies handling immutable data structures, and works very well with REDUX.
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default: {
            return state
        }    
    }
}

const store = createStore(reducer)

console.log('initialState: ', store.getState())

const unSubscribe = store.subscribe( () => 
    console.log('updatedState : ', store.getState())
)

const actions = bindActionCreators({ updateStreet }, store.dispatch)

actions.updateStreet('4th MAIN')

unSubscribe()