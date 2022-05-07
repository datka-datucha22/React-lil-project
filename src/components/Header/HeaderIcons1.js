import React, { Component } from 'react'
import HeaderIcon from './HeaderIcon'
import './Header styles/HeaderIcons.css'

export default class HeaderIcons1 extends Component {
    render() {
        return (
            <div className="HeaderIcons1">
                <HeaderIcon link='icons/HeaderIcons/Path.png' />
                <HeaderIcon link='icons/HeaderIcons/Twitter.png' />
                <HeaderIcon link='icons/HeaderIcons/Instagram.png' />
            </div>
        )
    }
}
