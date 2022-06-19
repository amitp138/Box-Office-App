import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
    <div> 
      <Title title='BOX OFFICE' subtitle='are you looking for movies or actors'/>
        <Navs/>
        {children}
    </div>
  )
}

export default MainPageLayout