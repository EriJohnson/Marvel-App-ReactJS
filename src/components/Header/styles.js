import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1080px;
  margin: 80px 0;

  @media (max-width: 260px) {
    flex-direction: column;
    justify-content: space-around;
  }

  img {
    height: 64px;

    @media (max-width: 540px) {
      display: none;
    }
  }

  span {
    font-weight: bold;
    font-size: 2.4rem;

    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Action = styled.div`
  margin-left: 24px;
  transition: 0.4s;
  opacity: 0.72;

  @media (max-width: 260px) {
    margin-top: 24px;
  }

  &:hover {
    opacity: 1;
  }
`
