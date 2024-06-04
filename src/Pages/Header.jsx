import React from 'react'
import NavListItem from '../Components/NavListItem'
import navListData from '../Data/navListData'
import './Header.css'
import Search from '../Components/Search'

const Header = () => {
  return (
    <header>
        <a href="/" className="logo">Cinema</a>
        <ul className="nav">
            {
                navListData.map(nav => ( 
                    <NavListItem key={nav._id} nav={nav} />
                ))
            }
        </ul>
        <Search/>
    </header>
  )
}

export default Header