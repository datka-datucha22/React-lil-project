import React, { Component } from 'react'

export default class Part2Image extends Component {
    render() {
        return (
            <div>
                <img style={{ marginLeft: '100px' }} src={this.props.link} alt="" />
            </div>
        )
    }
}
