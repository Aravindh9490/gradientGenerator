import Styled from 'styled-components'

export const MainContainer = Styled.div`
padding-top:10px;
height:100vh;
background-image: linear-gradient(${props => props.active});
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`
export const ButtonsContainer = Styled.ul`
display:flex;
flex-direction:row;
`
