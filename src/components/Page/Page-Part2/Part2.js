import React, { Component } from 'react'
import Part2Image from './Part2Image'
import Part2Title from './Part2Title'
import Part2Lorem from './Part2Lorem'

export default class Part2 extends Component {
    render() {
        return (
            <div style={{ display: 'flex', backgroundColor: '#306B34', paddingTop: '500px', paddingBottom: '180px' }}>
                <Part2Image link='icons/page/Feature.png' />
                <div style={{ marginLeft: '200px' }}>
                    <Part2Title />
                    <Part2Lorem />
                </div>
            </div>
        )
    }
}
