import React, { Component } from 'react'

export default class HeaderLi extends Component {
    render() {
        return (
            <div>
                <li>{this.props.title}</li>
            </div>
        )
    }
}
