import React, { Component } from 'react'

export default class FooterLi extends Component {
    render() {
        return (
            <div>
                <li>{this.props.inside}</li>
            </div>
        )
    }
}
