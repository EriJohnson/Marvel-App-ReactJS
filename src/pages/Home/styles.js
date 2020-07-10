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
  margin-bottom: 244px;

  h1 {
    font-size: 96px;
    font-weight: bolder;
    margin-bottom: 24px;
  }

  p {
    font-size: 26px;
    margin-bottom: 28px;
  }
`

export const Button = styled.button`
  width: 330px;
  height: 80px;
  background: #f2141f;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
  font-size: 24px;
  border: 2px solid transparent;
  margin-top: 16px;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`
