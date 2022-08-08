import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }
  state = {
    data: []
  }

  fetchData() {
    setTimeout(() => {
      this.setState({
        data: [1111, 2222]
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
      11
      </>
    )
  }
}
