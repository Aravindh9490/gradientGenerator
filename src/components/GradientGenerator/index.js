import {Component} from 'react'
import {MainContainer, ButtonsContainer} from './styledComponents'
import GragientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    directionV: 'top',
    active: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  color1Code = event => {
    this.setState({color1: event.target.value})
  }

  color2Code = event => {
    this.setState({color2: event.target.value})
  }

  gradientGenerator = () => {
    const {color1, color2, directionV} = this.state
    this.setState({active: `to ${directionV},${color1},${color2}`})
  }

  onChangeDirection = value => {
    this.setState({directionV: value})
  }

  render() {
    const {color1, color2, directionV, active} = this.state

    return (
      <MainContainer active={active} data-testid="gradientGenerator">
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ButtonsContainer>
          {gradientDirectionsList.map(direction => (
            <GragientDirectionItem
              key={direction.directionId}
              directionValue={direction}
              onChangeDirection={this.onChangeDirection}
              directionV={directionV}
            />
          ))}
        </ButtonsContainer>
        <p>Pick the Colors</p>
        <div>
          <div>
            <p>{color1}</p>
            <br />
            <input
              type="color"
              id="col1"
              value={color1}
              onChange={this.color1Code}
            />
            <br />
          </div>
          <div>
            <p>{color2}</p>
            <br />
            <input
              id="col2"
              type="color"
              value={color2}
              onChange={this.color2Code}
            />
            <br />
          </div>
        </div>
        <div>
          <button onClick={this.gradientGenerator} type="button">
            Generate
          </button>
        </div>
      </MainContainer>
    )
  }
}

export default GradientGenerator
