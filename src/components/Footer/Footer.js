import React, { Component } from 'react'
import FooterTitle from './FooterTitle'
import FooterUl from './FooterUl'

export default class Footer extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '50px', display: 'flex', alignItems: 'center', backgroundColor: 'green' }}>
                <FooterTitle />
                <FooterUl />

            </div>
        )
    }
}
