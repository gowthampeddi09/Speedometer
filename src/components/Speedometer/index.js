// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return {speed: prevState.speed}
    })
  }

  applyBreak = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return {speed: prevState.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="min-max-speed">Min Limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button onClick={this.accelerate} className="accelerate-button">
            Accelerate
          </button>
          <button onClick={this.applyBreak} className="apply-break-button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
