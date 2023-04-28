import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'
import { Button } from '../components/Task/styles'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;

  overflow-y: scroll;
`
export const Title = styled.p`
  font-weight: bold;
  display: block;
  margin: 40px 0;
  font-size: 18px;
`
export const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  border-color: #666666;
  color: #666666;
  font-weight: bold;
  width: 100%;
`
export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
