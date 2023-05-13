import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import styled from '@emotion/styled'

function App() {

 const Container = styled.div`
 max-width: 600px;
 margin: 0 auto;
 `

 const ContenedorFormulario = styled.div`
 background-color: #fff;
 padding: 3rem;
 `

  return (
    <Container>
      <Header
    titulo="cotizador de seguros"/>
    <ContenedorFormulario>
    <Formulario/>
    </ContenedorFormulario>
    </Container>
  )
}

export default App
