import React, { Component } from 'react'
import HeaderIcon from './HeaderIcon'
import './Header styles/HeaderIcons.css'
import HeaderIcons1 from './HeaderIcons1'

export default class HeaderIcons extends Component {
    render() {
        return (
            <div className="HeaderIcons">
                <HeaderIcon link='icons/HeaderIcons/Search.png' />
                <HeaderIcons1 />

            </div>
        )
    }
}
