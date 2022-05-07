import React from 'react'
import HeaderH1 from './HeaderH1'
import HeaderUl from './HeaderUl'
import HeaderIcons from './HeaderIcons'
import './Header styles/Header.css'

function Header() {
    return (
        <div class="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <HeaderH1 />
            <HeaderUl />
            <HeaderIcons />

        </div>
    )
}

export default Header