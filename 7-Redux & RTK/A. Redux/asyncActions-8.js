const redux = require('redux')
const createStore = redux.createStore

// we need to define 3 things
// THE STATE
// THE ACTION
// THE REDUCER

// 1. STATE
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// 2. ACTIONS
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// ACTION CREATORS
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

// 3. REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED :
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED :
            return {
                loading: false,
                users: action.payload,
                error: ''
            }    
        case FETCH_USERS_FAILED :
            return {
                loading: false,
                data: [],
                error: action.payload
            }    
    }
}

// 4. REDUX STORE
create store = createStore(reducer)