import styled from 'styled-components'

export const Form = styled.form`
  max-width: 550px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666;

  textarea {
    resize: none;
    margin: 16px 0;
    height: 80px;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 12px;
  }

  label {
    margin-right: 12px;
    margin-left: 4px;
  }
`

export const Opcao = styled.div`
  text-transform: capitalize;
  display: inline;
`
