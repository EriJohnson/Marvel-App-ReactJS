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
  align-items: center;
  width: 1080px;
  min-height: 256px;
  background: #f7f7f8;
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
    font-size: 3.2rem;
  }

  h2 {
    color: #212529;
    margin-bottom: 24px;
    font-size: 2.4rem;
  }

  p {
    color: #212529;
    margin-bottom: 14px;
    font-size: 1.6rem;
  }

  span {
    color: #212529;
  }
`

export const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-width: 50%;

  img {
    max-width: 90%;
    max-height: 448px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  min-width: 50%;
`
export const Button = styled.button`
  margin: 32px 0;
  background-color: transparent;
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
  font-size: 1.4rem;
  border: 2px solid transparent;

  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`
