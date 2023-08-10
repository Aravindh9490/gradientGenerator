import Styled from 'styled-components'

export const Button = Styled.button`
color: black;
margin:5px;
padding:10px;
border:none;
border-radius:7px;
opacity:${props => props.click}; 
background-color:#fff;
cursor:pointer;
`
export const DivContainer = Styled.li`
display:flex;


`
