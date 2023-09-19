// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: false}

  buttonText = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  getButtonText = () => {
    const {lightMode} = this.state

    return lightMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <div className={this.lightMode ? 'light-mode' : 'dark-mode'}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button type="button" onClick={this.buttonText} className="btn">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
