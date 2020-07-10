import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  margin: 80px 0;

  img {
    height: 64px;
  }

  span {
    font-weight: bold;
    font-size: 24px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Action = styled.div`
  margin-left: 24px;
`
