import React from 'react'
import './MenuItem.css'

function MenuItem({title,price,tags}) {
  return (
    <div className="app__menuitem">
        <div className="app__menuitem-head">
        <div className="app__menuitem-name">
            <p className='parag' style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        <div className='app__menuitem-dash'></div>
        <div className="app__menuitem-price">
            <p className='parag' style={{ color: '#DCCA87' }}>{price}</p>
        </div>
        </div>
        <div className='app_menuitem-sub' style={{ color:'#AAA'}}>{tags}</div>
    </div>
    
  )
}

export default MenuItem
