import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  margin: 80px 0;

  span {
    font-weight: bold;
    font-size: 24px;
  }
`
export const SearchBar = styled.button`
  display: flex;
  justify-content: c;
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

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Action = styled.div`
  margin-left: 24px;
`
