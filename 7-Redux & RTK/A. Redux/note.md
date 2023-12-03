### What is the difference between MD and TXT file?
- Plain text files (. txt) don't allow formatting, such as headings, sub-headings, bold, italics, underlining,     lists, etc. The Markdown (. md) format does.

### INITIAL SET UP :

- npm init --yes
    this creates the package.json file with default settings.

- npm install redux

- create index.js 
    & write log() for console

- run 
- node index
    to see the output

_________________________________________________________________________

### To help ease the state updation process, we can make use of library called immer

- npm i immer

- return produce(state, () => {})
- state        ---->  1st argument is the "CURRENT STATE"=
- () => {}     ---->  2nd argument is the function which receives, the "DRAFT" copy of the state.
- wt immer allows us to do is   ---->  update this DRAFT state, as if state is MUTABLE.

_________________________________________________________________________

- npm i redux-logger

- Log only in development
- Log everything except actions with certain type
- Collapse actions with certain type
- Transform Immutable (without combineReducers)
- Transform Immutable (with combineReducers)
- Log batched actions

_________________________________________________________________________

- AXIOS : Requests to an API end point
- REDUX-THUNK : Define async action creators. ---> Will be a MIDDLEWARE
_________________________________________________________________________
- list :

# const store = createStore(rootReducer, applyMiddleware(logger))

1. bindActionCreators - to bind action creators (functions)  --> const actions

2. combineReducers - to create rootReducer

3. applyMiddleware - we can pass any number of middlewares, as our application requires. (e.g. logger) & pass as 2nd parameter in createStore

4. reduxLogger = require('redux-logger')
   logger = reduxLogger.createLogger()

5.  const produce = require('immer').produce     // import
    
    produce(state, (draft) => {
        draft.address.street = action.payload
    })

6. 
- AXIOS : Requests to an API end point
- REDUX-THUNK : Define async action creators. ---> Will be a MIDDLEWARE

- thunkMiddleware ---> the ability for an "action-creator" to return a function, instead of an action object.
