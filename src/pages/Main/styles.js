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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  list-style: none;
  margin-bottom: 280px;
`
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 280px;
  background: #f7f7f8;
  padding: 24px;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    opacity: 0.96;
    box-shadow: 0px 20px 40px rgba(242, 20, 31, 0.70);
  }
  
  img{
    height: 112px;
    width: 112px;
    border-radius: 56px;
    margin-bottom: 16px;
    
  }

  h3{
    color:#212529;
    margin-bottom: 16px;
  }

  span{
    color:#212529;
  }

  button{
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

`
