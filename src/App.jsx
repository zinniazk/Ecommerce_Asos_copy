import { useState } from 'react'
import "./App.css"
import Body from './components/Body'
import Card from './components/Card'
import { Route, Routes, } from 'react-router-dom'
import ProductList from './components/Productlist'
import { Provider } from 'react-redux'
import appStore from './utils/appstore'
import Layout from './components/Layout'
import Cart from './components/Cart'
import Login from './components/Login'
import Account from './components/Account'
import Wishlist from './components/Wishlist'
import SignOut from './components/SignOut'

function App() {
  const [count, setCount] = useState(0);

  return(
    <Provider store={appStore}>
      <div>
           
      

       { /* Enable outlets to get header and footer on each page */}

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Body/>}/>
            <Route path='product' element={<Card/>}/>
            <Route path='product/:prodid' element={<ProductList/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/signout' element={<SignOut/>}/>
         </Route>
       </Routes>
    </div>
    </Provider>
  );
}


export default App


