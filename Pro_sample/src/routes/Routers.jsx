import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Market from '../pages/Market'
import Create from '../pages/Create'
import TransHistory from '../pages/TransHistory'
import SellerProfile from '../pages/SellerProfile'
import EditProfile from '../pages/EditProfile'
import Wallet from '../pages/Wallet'
import NftDetails from '../pages/NftDetails'

function Router () {
    return(
       <Routes>
        <Route path='/' element={<Navigate to = '/home' />} />

        <Route path='/home' element={<Home/>} />
        <Route path='/market' element={<Market/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/transaction-history' element={<TransHistory/>} />
        <Route path='/edit-profile' element={<EditProfile/>} />
        <Route path='/seller-profile' element={<SellerProfile/>} />
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/market/:id' element={<NftDetails/>} />

       </Routes>
    );
}
export default Router