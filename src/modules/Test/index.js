import React, { Component } from 'react'
import store from '../../redux/store/index'
import { addCount } from '../../redux/action'

export default class Test extends Component {
  state = store.getState()

  onClick = () => {
    console.log('a')
    store.dispatch(addCount())
  }

  render() {
    return (
      <>
        <h1>{ this.state }</h1>
        <button onClick={this.onClick}>按钮</button>
      </>
    )
  }
}