import { useState } from 'react'
import "./App.css"
import Body from './components/Body'
import Card from './components/Card'
import { Route, Routes, } from 'react-router-dom'
import ProductList from './components/productlist'

import Layout from './components/Layout'
function App() {
  const [count, setCount] = useState(0);

  return(
      <div>
          
      

       { /* Enable outlets to get header and footer on each page */}

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Body/>}/>
            <Route path='product' element={<Card/>}/>
            <Route path='product/:prodid' element={<ProductList/>}/>
         </Route>
       </Routes>
    </div>
  );
}


export default App


