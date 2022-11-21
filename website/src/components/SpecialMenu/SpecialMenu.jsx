import React from 'react'
import menu from '../../images/menu.png'
import MenuItem from '../MenuItem/MenuItem';
import {cocktails,deserts} from './data';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className="container"> 
        <div>
            <h1 className="Bigtitle">Today's Special</h1>
        </div>
        <div className="menu">
            <div className="">
                <p className="title">Cocktails</p>
                <div>
                    {cocktails.map((cocktail,index)=> (
                        <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                    ))}
                </div>
            </div>
            <div className='app__specialmenu_img'>
                <img src={menu} alt="menu" />
            </div>
            <div className="" id="menu">
                <p className="title">Deserts</p>
                <div>
                    {deserts.map((desert,index)=> (
                        <MenuItem key={desert.title + index} title={desert.title} price={desert.price} tags={desert.tags} />
                    ))}
                </div>
            </div>
            <div></div>
            <div></div>

        </div>
        <div style={{ marginTop:'15px', textAlign: 'center' }}>
            <button type="button" className='custom__button'>View More</button>
        </div>
    </div>
  )
}

export default SpecialMenu;
