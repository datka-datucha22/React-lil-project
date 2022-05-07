import React, { Component } from 'react'
import PageP1Image from './PageP1Image'
import Part1About from './Part1About'

export default class Part1 extends Component {
    render() {
        return (
            <div>
                <PageP1Image className="photo" link='icons/page/Banner.png' />
                <Part1About className='about' />
            </div>
        )
    }
}
