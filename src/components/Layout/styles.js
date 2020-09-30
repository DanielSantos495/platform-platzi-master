import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 300px;
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #233A46;
  h1 {
    color: #fff;
    font-family: 'Lato', Helvetica;
    font-size: 60px;
    font-weight: 700;
  }
  img {
    width: 100px;
    height: 120px;
    line-height: 0;
  }
`

export const Main = styled.main`
  width: 90%;
  height: auto;
  margin: 0 auto;
`
