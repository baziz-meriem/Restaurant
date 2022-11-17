import React from 'react'
import {SidebarContainer,Icon,SidebarMenu,SideBtnWrap,SidebarLink,SidebarRoute,CloseIcon} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
  )
}

export default Sidebar