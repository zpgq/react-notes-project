import { Component } from 'react'

export default class SelectRef extends Component {
    state = {
        isOpen: false,
    }
    timeOutId = null

    onClickHandler = () => {
         this.setState((currentState, currentProps) => (console.log(currentState, currentProps) && {
            isOpen: !currentState.isOpen
        }))
    }
    ononBlurHandler = () => {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            })
        })
    }
    onFocusHandler = () => {
        clearTimeout(this.timeOutId)
    }
    render() {
        return (
            <div 
                onFocus={this.onFocusHandler}
                onBlur={this.ononBlurHandler}
            >
                <button onClick={this.onClickHandler}>select an option</button>
                {
                    this.state.isOpen && (
                        <ul>
                            <li>option 1</li>
                            <li>option 2</li>
                            <li>option 3</li>
                        </ul>
                    )
                }
            </div>
        )
    }
}
