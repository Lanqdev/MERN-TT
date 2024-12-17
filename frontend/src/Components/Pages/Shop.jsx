import React from 'react'
import { Hero } from '../Hero/Hero'
import { Popular } from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../New Collections/NewCollections'
import Newsletter from '../Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <Newsletter/>
    </div>
  )
}

export default Shop
