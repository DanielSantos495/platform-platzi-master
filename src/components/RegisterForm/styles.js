import styled from 'styled-components'

export const Register = styled.section`
  width: 90%;
  height: 500px;
  margin: 0 auto;
  h2 {
    margin: 50px 0 50px 0;
    font-family: 'Lato', Helvetica;
    font-size: 25px;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
`

export const Form = styled.form`
  width: 560px;
  height: auto;
  margin: 0 auto 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 10px;
`

export const Label = styled.label`
  margin: 20px 20px 0 0;
  font-family: 'Lato', Helvetica;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  input {
    width: 100%;
    height: 30px;
    margin: 10px 0 0 0;
    border: none;
    border-bottom: 1px solid #c4c4c4;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 30px;
  margin: 30px 0 0 0;
  color: #fff;
  background-color: #233A46;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    transform: scale(.99);
  }
`
