import React from 'react'
import HeaderLi from './HeaderLi'

function HeaderUl() {
    return (
        <div>
            <ul style={{ display: 'flex', justifyContent: 'space-around', width: '524px', fontSize: '18px' }}>
                <HeaderLi title='BLOG' />
                <HeaderLi title='SHOP' />
                <HeaderLi title='ABOUT' />
                <HeaderLi title='CONTACT' />
            </ul>
        </div>
    )
}

export default HeaderUl