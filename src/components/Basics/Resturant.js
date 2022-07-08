import React, { useState } from 'react'
import Navbar from './Navbar'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
const uniqueList=[
  ...new Set(
Menu.map((curElem)=>{
return curElem.category;
})
  ),
  "All"
]

const Resturant = () => {
    const[menuData,setMenuData]=useState(Menu)
   const [menuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
      if(category==="All"){
        setMenuData(Menu)
        return;
      }
  const updatedList=Menu.filter((curElem)=>{
    return curElem.category === category; 
  })
  setMenuData(updatedList);
    };
    // console.log(setMenuData())
  return (
    <>
   <Navbar filterItem={filterItem} menuList={menuList}/>
  <MenuCard menuData={menuData}/>  
    </>
  )
}

export default Resturant
