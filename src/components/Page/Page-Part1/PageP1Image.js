import React, { Component } from 'react'

export default class PageP1Image extends Component {
    render() {
        return (
            <div><img style={{ width: '100%', position: 'absolute' }} src={this.props.link} alt="" /></div>
        )
    }
}
