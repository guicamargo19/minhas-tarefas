import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
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

export const Titulo = styled.h2`
  font-size: 18px;
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
`

export const Campo = styled.input`
  border-radius: 6px;
  border-color: #666;
  color: #666;
  background-color: #fff;
  padding: 8px;
  font-weight: bold;
  outline-color: darkgray;
  width: 100%;
`

export const Botao = styled.button`
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.corAzulEscuro};
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corVerde};
`

export default EstiloGlobal
