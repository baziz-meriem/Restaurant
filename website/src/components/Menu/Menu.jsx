import React,{useState,useEffect} from 'react'
import MenuCard from '../MenuCard/MenuCard';
import {productData}  from "./data.js";
import "./Menu.css"
import Filter from './filter';
function Menu() {
  const [filtered,setFiltered]= useState([]);

  return (
    <div className='general-menu'>
      <Filter/>
    <div className='filtered-menu'>{productData.map(menu => {
      return <MenuCard key={menu.id} menu={menu}/>;
    })}
    </div>

    </div>
  )
}

export default Menu