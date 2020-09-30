import styled from 'styled-components'

export const Article = styled.article`
  width: 98%;
  height: 100px;
  padding: 10px;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Lato', Helvetica;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, .2);

`

export const Img = styled.img`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%
`

export const Div = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p:nth-of-type(1) {
    width: 200px;
    display: block;
    font-weight: 700;
  }
  div {
    width: 300px;
    height: auto;
    display: flex;
    align-items: center;
    p {
      margin:  0 0 0 10px;
      font-weight: 400;
    }
  }
`

export const TagCohort = styled.span`
  width: 90px;
  height: 20px;
  display: block;
  margin: 10px 0 0 0;
  color: white;
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
  border-radius: 10px;
  text-align: center;
`
