import styled from 'styled-components'
import img from '../../assets/imgs/HomeBackground.png'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 100vh;
`
export const Section = styled.section`
  width: 100%;

  h1 {
    font-size: 96px;
    font-weight: bolder;
    margin-bottom: 28px;
  }

  p {
    font-size: 28px;
    margin-bottom: 28px;
  }

  button {
    width: 330px;
    height: 80px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #f2141f;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
  font-size: 14px;
  border: 2px solid transparent;
  margin-top: 16px;

  &:hover {
    opacity: 0.8;
  }
`
