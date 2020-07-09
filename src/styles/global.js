import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: #fff

}

button{
   cursor: pointer; 
 }

 button, input {
   outline: 0;
 }

 a{
  text-decoration-line: none;
 }
`
