import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CHANGE_INPUT, ADD_ITEM } from '../../../redux/constant'

class Redux extends Component {
  render() {
    const {inputChange, onClickBtn, list, inputValue } = this.props
    return (
      <div>
        <input value={inputValue} onChange={inputChange}/>
        <button onClick={onClickBtn}>提交</button>
        <ul>
          {/* <li>内容</li> */}
          {
            list.map( (item, index) => {
              return (<li key={index}> { item } </li>)
            })
          }
        </ul>
      </div>
    )
  }
}

// 查store的state
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 操作store的state
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: CHANGE_INPUT,
        value: e.target.value
      }
      dispatch(action)
    },
    onClickBtn() {
      let action = {
        type: ADD_ITEM
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Redux)