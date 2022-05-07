import React, { Component } from 'react'

export default class HeaderIcon extends Component {
    render() {
        return (
            <div><img src={this.props.link} alt="icon" /></div>

        )
    }
}
