import styled, { keyframes, css } from 'styled-components'

export const Article = styled.article`
  width: 100%;
  height: auto;
`

export const Div = styled.div`
  height: 30px;
  padding: 20px;
  margin: 20px 0 0 0;
  background-color: #233A46;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, .2);
  cursor: pointer;
  &:active {
    transform: scale(.998);
  }
  h2 {
    font-family: 'Lato', Helvetica;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
`
