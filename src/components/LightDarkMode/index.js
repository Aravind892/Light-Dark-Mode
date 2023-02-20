// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isPressed: false,
  }

  onPress = () => {
    this.setState(prevState => ({isPressed: !prevState.isPressed}))
  }

  render() {
    const {isPressed} = this.state
    const buttonText = isPressed ? 'Light Mode' : 'Dark Mode'
    const modeClassName = isPressed ? 'dark-mode' : 'light-mode'

    return (
      <div className="container">
        <div className={`card ${modeClassName}`}>
          <h1 className="heading">Click to change Mode</h1>

          <div>
            <button className="button" type="button" onClick={this.onPress}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
