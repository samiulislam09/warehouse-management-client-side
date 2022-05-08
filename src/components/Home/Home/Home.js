import React from 'react'
import ContactUs from '../../ContactUs/ContactUs'
import Map from '../../Map/Map'
import Products from '../../Products/Products'

function Home() {
  return (
    <div>
      <div className='w-100'><img className='w-100 igm-fluid' src="https://www.treeoflife.center/wp-content/uploads/2018/02/bookstall-banner.jpg" alt="" /></div>
        <Products></Products>
        <Map></Map>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Home