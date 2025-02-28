import { useState } from 'react'
import "./App.css"
import Body from './components/Body'
import Card from './components/Card'
import { Route, Routes, } from 'react-router-dom'
import ProductList from './components/productlist'
import { Provider } from 'react-redux'
import appStore from './utils/appstore'
import Layout from './components/Layout'
import Cart from './components/cart'

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
         </Route>
       </Routes>
    </div>
    </Provider>
  );
}


export default App


