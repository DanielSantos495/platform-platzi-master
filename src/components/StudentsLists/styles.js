import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

const fontFamily = 'Lato, Helvetica'

export const SearchWrapper = styled.div`
  margin: 0 0 50px 0;
  font-family: ${fontFamily};
  font-size: 30px;
`

export const Input = styled.input`
  width: 400px;
  height: 30px;
  margin: 0 0 0 10px;
  font-size: 20px;
`

export const FilterTitle = styled.p`
  margin: 0 0 20px;
  font-family: ${fontFamily};
  font-size: 25px;
`

export const Filters = styled.button`
  width: 80px;
  height: 30px;
  margin: 0 5px 0 0;
  color: #fff;
  background-color: ${props => {
      switch (props.cohortColor) {
        case 1:
          return 'blue'
        case 2:
          return 'green'
        case 3:
          return 'red'
        case 4:
          return 'violet'
        case 5:
        return 'orange'
        case 6:
          return 'gray'
      }
  }};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const Linked = styled(LinkRouter)`
  width: 200px;
  height: 40px;
  margin: 0 0  0 40px;
  padding: 5px 0 0 0;
  display: inline-block;
  font-size: 25px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  background-color: #233A46;
  border-radius: 5px;
  box-sizing: border-box;
  &:active {
    transform: scale(.99);
  }
`
