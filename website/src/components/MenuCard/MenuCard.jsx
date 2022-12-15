import React from 'react'
import "./MenuCard.css"

export default function MenuCard({menu}) {
  return (
    <div className=''>
      <div className='menu'>{menu.title}</div>
      <img className='menu-img' src= {menu.img} alt="" />
      <div className='menu'>{menu.desc}</div>
      <div className='menu'>{menu.price}</div>
    </div>
  )
}
