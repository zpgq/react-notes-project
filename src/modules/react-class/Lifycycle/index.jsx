import React, { Component } from 'react'

export default class Lifycycle extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
  }
  render() {
    console.log('render')
    return (
      <div>Lifycycle</div>
    )
  }
}
