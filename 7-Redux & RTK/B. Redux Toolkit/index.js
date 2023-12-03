// import "store" & "actions" in this file

const  store = require('./app/store')            
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions  // named export called: .cakeActions                        
const icecreamActions = require('./app/features/icecream/icecreamSlice').icecreamActions               
const fetchUsers = require('./app/features/user/userSlice').fetchUsers

console.log("Initial State : ", store.getState());

const unsubscribe = store.subscribe(() => {
    // console.log('Updated state : ',store.getState());
    console.log('Updated state : ',store.getState());
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered()) 
// store.dispatch(cakeActions.ordered()) 
// store.dispatch(cakeActions.ordered()) 

// store.dispatch(cakeActions.restocked(3)) 

// store.dispatch(icecreamActions.ordered(3)) 
// store.dispatch(icecreamActions.ordered(2)) 
// store.dispatch(icecreamActions.ordered(1)) 

// store.dispatch(icecreamActions.restocked(3))  

// unsubscribe()


// .dispatch()  ---> dispatch actions on store.
// .getState()  ---> inspect the state.
// .subscribe() ---> listen to changes.


// output :

// PS F:\REDUX PROJECTS\REDUX-TOOLKIT> node index
// Initial State :  { cake: { numOfCakes: 10 } }
// Updated state :  { cake: { numOfCakes: 9 } }
// Updated state :  { cake: { numOfCakes: 8 } }
// Updated state :  { cake: { numOfCakes: 7 } }
// Updated state :  { cake: { numOfCakes: 10 } }


// PS F:\REDUX PROJECTS\REDUX-TOOLKIT> node index
// Initial State :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
// Updated state :  { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
// Updated state :  { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
// Updated state :  { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 15 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 14 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }


// --------------------------------------------------------------------------------
// focus on : cake/ordered, cake/restocked
// ________________________________________________________________________________

// PS F:\REDUX PROJECTS\REDUX-TOOLKIT> node index
// Initial State :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
//  action cake/ordered @ 11:53:04.947
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
//  action cake/ordered @ 11:53:04.950
//    prev state { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
//  action cake/ordered @ 11:53:04.952
//    prev state { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
//  action cake/restocked @ 11:53:04.953
//    prev state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
//    action     { type: 'cake/restocked', payload: 3 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
//  action icecream/ordered @ 11:53:04.954
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
//    action     { type: 'icecream/ordered', payload: 3 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
//  action icecream/ordered @ 11:53:04.955
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
//    action     { type: 'icecream/ordered', payload: 2 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 15 } }
//  action icecream/ordered @ 11:53:04.956
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 15 } }
//    action     { type: 'icecream/ordered', payload: 1 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 14 } }
//  action icecream/restocked @ 11:53:04.959
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 14 } }
//    action     { type: 'icecream/restocked', payload: 3 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }


// -----------------------------------------------------------------------------------------

// extra reducers :

// PS F:\REDUX PROJECTS\REDUX-TOOLKIT> node index
// The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice
// Initial State :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
// Updated state :  { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 19 } }
// Updated state :  { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 18 } }
// Updated state :  { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 17 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 17 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 14 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 12 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 11 } }
// Updated state :  { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 14 } }


// -----------------------------------------------------------------------------------------------------

// PS F:\REDUX PROJECTS\REDUX-TOOLKIT> node index
// Initial State :  {
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecreams: 20 },
//   user: { loading: false, users: [], error: '' }
// }
// Updated state :  {
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecreams: 20 },
//   user: { loading: true, users: [], error: '' }
// }
// Updated state :  {
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecreams: 20 },
//   user: {
//     loading: false,
//     users: [
//       1, 2, 3, 4,  5,
//       6, 7, 8, 9, 10
//     ],
//     error: ''
//   }
// }


// -------------------------------------------------------------------------------------------------

// PS F:\REDUX PROJECTS\REDUX-TOOLKIT> node index
// Initial State :  {
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecreams: 20 },
//   user: { loading: false, users: [], error: '' }
// }
// Updated state :  {
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecreams: 20 },
//   user: { loading: true, users: [], error: '' }
// }
//  action user/fetchUsers/pending @ 18:54:02.021
//    prev state {
//     cake: { numOfCakes: 10 },
//     icecream: { numOfIcecreams: 20 },
//     user: { loading: false, users: [], error: '' }
//   }
//    action     {
//     type: 'user/fetchUsers/pending',
//     payload: undefined,
//     meta: {
//       arg: undefined,
//       requestId: 'e3dhqgsz5LOXvPhgv8APy',
//       requestStatus: 'pending'
//     }
//   }
//    next state {
//     cake: { numOfCakes: 10 },
//     icecream: { numOfIcecreams: 20 },
//     user: { loading: true, users: [], error: '' }
//   }
// Updated state :  {
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecreams: 20 },
//   user: {
//     loading: false,
//     users: [
//       1, 2, 3, 4,  5,
//       6, 7, 8, 9, 10
//     ],
//     error: ''
//   }
// }
//  action user/fetchUsers/fulfilled @ 18:54:04.393
//    prev state {
//     cake: { numOfCakes: 10 },
//     icecream: { numOfIcecreams: 20 },
//     user: { loading: true, users: [], error: '' }
//   }
//    action     {
//     type: 'user/fetchUsers/fulfilled',
//     payload: [
//       1, 2, 3, 4,  5,
//       6, 7, 8, 9, 10
//     ],
//     meta: {
//       arg: undefined,
//       requestId: 'e3dhqgsz5LOXvPhgv8APy',
//       requestStatus: 'fulfilled'
//     }
//   }
//    next state {
//     cake: { numOfCakes: 10 },
//     icecream: { numOfIcecreams: 20 },
//     user: {
//       loading: false,
//       users: [
//         1, 2, 3, 4,  5,
//         6, 7, 8, 9, 10
//       ],
//       error: ''
//     }
//   }

// -------------------------------------------------------------------------------------------------

// Simple Code for index.js to handle the Cake Store:


// const  store = require('./app/store')            
// const cakeActions = require('./app/features/cake/cakeSlice').cakeActions  // named export called: .cakeActions                        

// console.log("Initial State : ", store.getState());

// const unsubscribe = store.subscribe(() => {
//     console.log('Updated state : ',store.getState());
// })

// store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered()) 
// store.dispatch(cakeActions.ordered()) 
// store.dispatch(cakeActions.ordered()) 
// store.dispatch(cakeActions.restocked(3)) 

// unsubscribe()