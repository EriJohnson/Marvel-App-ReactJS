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
  margin: 0 auto;

  @media (max-width: 1366px) {
    background: linear-gradient(180deg, #02376a 0%, #001220 100%);
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1184px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
  }

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 1184px) {
      display: none;
    }
  }
`
export const Section = styled.section`
  width: 100%;
  margin-bottom: 244px;
  margin-right: 32px;
  background: orange;

  @media (max-width: 1184px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 9.6rem;
    font-weight: bolder;
    margin-bottom: 24px;

    @media (max-width: 1184px) {
      text-align: center;
    }
  }

  p {
    font-size: 2.6rem;
    margin-bottom: 28px;

    @media (max-width: 1184px) {
      text-align: center;
    }
  }
`

export const Button = styled.button`
  width: 330px;
  height: 80px;
  border-radius: 8px;
  background: #f2141f;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
  font-size: 2.4rem;
  border: 2px solid transparent;
  margin-top: 16px;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`
