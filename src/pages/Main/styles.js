import styled from 'styled-components'
import img from '../../assets/imgs/HomeBackground.png'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;

  span {
    font-weight: bold;
  }
`
export const SearchBar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 64px;
  border-radius: 240px;
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

export const Actions = styled.div`
  display: flex;
  align-items: center;
`
