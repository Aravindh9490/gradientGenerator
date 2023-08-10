import {Button, DivContainer} from './styledComponents'

const GragientDirectionItem = props => {
  const {directionValue, onChangeDirection, directionV} = props
  const {directionId, value, displayText} = directionValue

  const onClickDirection = () => {
    onChangeDirection(value)
  }

  const opacity = directionV === value ? 1 : 0.5

  return (
    <DivContainer>
      <Button onClick={onClickDirection} click={opacity}>
        {displayText}
      </Button>
    </DivContainer>
  )
}

export default GragientDirectionItem
