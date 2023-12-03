import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import { Home } from './components/Home'
// import { About } from './components/About'
import { Login } from './components/Login'
import { AuthProvider } from './components/auth';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary'
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts'
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile'
import { RequireAuth } from './components/RequireAuth'

// Lazy(): is function, that takes another function as argument,
// this argument calls a dynamic import.
// A promise returned by this dynamic import, which is then converted into a module that contains, a default exported react component (i.e. About Component)
const LazyAbout = React.lazy(() => import('./components/About'))
// import './App.css';

function App() {
  return (
  <AuthProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route 
          path='about' 
          element={ 
            <React.Suspense fallback='Loading...'>
              <LazyAbout /> 
            </React.Suspense> 
          } 
        />
        <Route path='order-summary' element={ <OrderSummary /> } />
        {/* <Route path='products' element={ <Products /> } /> */}
        <Route path='products' element={ <Products /> } >
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={ <FeaturedProducts /> }/>
          <Route path='new' element={ <NewProducts /> }/>
        </Route>
        <Route path='users' element={ <Users /> } >
          <Route path=':userId' element={ <UserDetails /> } />
          <Route path='admin' element={ <Admin/> } />
        </Route>
        {/* <Route path='users/:userId' element={ <UserDetails /> } />
            <Route path='users/admin' element={ <Admin/> } /> */}
       
        {/* <Route path='profile' element={ <Profile /> } /> */}
        
        <Route 
          path='profile' 
          element= { 
            <RequireAuth>
              <Profile />
            </RequireAuth>   
          } 
        />

        <Route path='login' element={ <Login /> } />
        <Route path='*' element={ <NoMatch /> } />
      </Routes>
  </AuthProvider>
  );
}

export default App;
                                                                                                                                