import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: #fff
}

html{
  /* a cada 1rem será considerado 10px */
  font-size: 62.5%;
}

html,
body{
  height: 100vh;
}

body{
  font-size: 1.6rem;
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
