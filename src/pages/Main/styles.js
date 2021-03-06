import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #02376a 0%, #001220 100%);
  overflow: scroll;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;
  list-style: none;
  margin-bottom: 64px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 864px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1152px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 280px;
  background: #f7f7f8;
  padding: 8px;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    opacity: 0.96;
    box-shadow: 0px 20px 40px rgba(242, 20, 31, 0.7);
    transform: scale(1.05);
  }

  img {
    height: 112px;
    width: 112px;
    border-radius: 56px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.6rem;
    color: #212529;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 1.2rem;
    color: #212529;
    margin-bottom: 2px;
  }

  span {
    font-size: 1.2rem;
    color: #212529;
    margin-bottom: 2px;
  }
`
export const Pagination = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;

  button {
    margin: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #f2141f;
    color: #fff;
    font-weight: bold;
    transition: 0.2s;
    font-size: 1.2rem;
    border: 2px solid transparent;

    &:hover {
      opacity: 0.8;
    }
  }
`
