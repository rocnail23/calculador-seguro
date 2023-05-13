import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import styled from '@emotion/styled'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinners from './components/Spinner'


const Container = styled.div`
max-width: 600px;
margin: 0 auto;
`

const ContenedorFormulario = styled.div`
background-color: #fff;
padding: 3rem;
`

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      mark: "",
      year: "",
      plan: "",
    }
  })

  const {datos, cotizacion} = resumen

  const [showSpinner,  setShowSpinner] = useState(false)

  return (
    <Container>
      <Header
    titulo="cotizador de seguros"/>
    <ContenedorFormulario>
    <Formulario 
    setResumen={setResumen}
    setShowSpinner={setShowSpinner}/>
      <Spinners
      showSpinner={showSpinner} />
    <Resumen datos={datos} />
    <Resultado cotizacion={cotizacion}  />
    
    </ContenedorFormulario>
    </Container>
  )
}

export default App
