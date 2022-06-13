import React, { Component } from 'react'
import Children from './Children.jsx'

export default class Ref extends Component {
	ref(node) {
		console.log(node)
	}
	render() {

		return (
			<Children ref={this.refNode}></Children>
		)
	}
}
