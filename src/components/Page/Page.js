import React, { Component } from 'react'
import Part1 from './Page-Part1/Part1'
import Part2 from './Page-Part2/Part2'

export default class Page extends Component {
    render() {
        return (
            <div>
                <Part1 />
                <Part2 />
            </div>
        )
    }
}
