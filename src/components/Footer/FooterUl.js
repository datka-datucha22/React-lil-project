import React, { Component } from 'react'
import FooterLi from './FooterLi'

export default class FooterUl extends Component {
    render() {
        return (
            <div>
                <ul style={{ display: 'flex', width: '500px', justifyContent: 'space-between', marginLeft: '400px' }}>
                    <FooterLi inside='SHOP' />
                    <FooterLi inside='BLOG' />
                    <FooterLi inside='ABOUT' />
                    <FooterLi inside='CONTACT' />

                </ul>
            </div>
        )
    }
}
