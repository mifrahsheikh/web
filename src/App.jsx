import React, { useState } from 'react'
import SignIn from './component/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './component/HomePage'
import ProtectedRoute from './protectedcomponents/ProtectedRoute'
import ProfileScreen from './component/MyProfile'
import OrderDetailScreen from './component/OrderDetailPage'
import SignUp from './component/SignUp'
import ProductScreen from './component/Products'
import Logout from './component/Logout'


const App = () => {
  return (
    <>
<Router>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/sign-in' element={
        <SignIn/>
      }/> 
      <Route path="signup" element={<SignUp/>}/>
      <Route path='/myprofile' element={
   <ProtectedRoute><ProfileScreen/></ProtectedRoute>}/>
   <Route path="/order/:orderId" element={<OrderDetailScreen />} />
<Route path='/products' element={<ProductScreen/>}/>
<Route path="/logout" element={<Logout />} />
  </Routes>
</Router>
    </>
  )
}

export default App
