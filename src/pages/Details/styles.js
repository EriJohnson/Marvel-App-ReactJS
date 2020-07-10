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
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1080px;
  min-height: 256px;
  background: #f7f7f8;
  padding: 24px;
  border-radius: 8px;
  transition: 0.2s;
  padding: 32px;

  li {
    color: #212529;
    list-style: none;
  }

  h1 {
    color: #212529;
    margin-bottom: 16px;
  }

  h2 {
    color: #212529;
    margin-bottom: 16px;
    font-size: 14px;
  }

  p {
    color: #212529;
    margin-bottom: 14px;
    font-size: 14px;
  }

  span {
    color: #212529;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 24px;
    border-radius: 240px;
    background: #f2141f;
    color: #fff;
    font-weight: bold;
    transition: 0.2s;
    font-size: 12px;
    border: 2px solid transparent;

    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
    }
  }
`
export const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-width: 50%;

  img {
    width: 90%;
    margin-bottom: 16px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  min-width: 50%;
`
