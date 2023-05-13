import React, { useState } from 'react'
import styled from '@emotion/styled'
import { yearDiference, incrementMark, incrementPlan } from '../Helpe'
import PropTypes from "prop-types"

const Campo = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
`
const Label = styled.label`
flex: 0 0 100px;
`

const Select = styled.select`
border: 1px solid #e1e1e1;
width: 100%;
padding: 1rem;
display: block;
appearance: none;
-webkit-appearance: none;
`
const InputRadio = styled.input`
margin:  0 1rem;
`

const Button = styled.button`
background-color: #00838f;
font-size: 16px;
width: 100%;
padding: 1rem;
color: #fff;
text-transform: uppercase;
font-weight: bold;
border: none;
transition: background-color .3s ease;
margin-top: 2rem;

&:hover {
    background-color: #26c6da;
    cursor: pointer;
}
`
const Error = styled.div`
padding: 1rem;
color: #fff;
background-color: red;

`

const Formulario = ({setResumen,setShowSpinner}) => {

 const [error, setError] = useState(false)
    
 const [datos, setDatos] = useState({
    mark: "",
    year: "",
    plan: "",
 })

 const {mark, year, plan} = datos
 
 const handleChange = (e) => {
     setDatos({
         ...datos,
         [e.target.name]: e.target.value
     })
 }
 
 const handleSubmit = (e) => {
    e.preventDefault()
    if(mark.trim() == "" || year.trim() == "" || plan.trim() == ""){
        setError(true)
        return
    }

    setError(false)
    let base = 2000
    let diference = yearDiference(year)
    base -= (diference * 3) * 2000 / 100
    
    base = base * incrementMark(mark)
   
    base = parseFloat(base * incrementPlan(plan)).toFixed(2)

    setShowSpinner(true)

    setTimeout(() => {
     setShowSpinner(false) 
     setResumen({
        cotizacion: Number(base),
        datos
    })
      
    }, 3000);

  

 }

  return (
    <form onSubmit={handleSubmit}>
        {error ? <Error>todos los campos sob obligatorios</Error>: null}
        <Campo>
            <Label>Marca</Label>
            <Select
            name='mark'
            value={mark}
            onChange={handleChange}>
                <option value="">--selecciones--</option>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </Select>
        </Campo>
        <Campo>
            <Label>año</Label>
            <Select
            name='year'
            value={year}
            onChange={handleChange}>
            <option value="">-- Seleccione --</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2020">2020</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Tipo</Label>
            <InputRadio type="radio"
            name='plan'
            value="basico"
            checked={plan == "basico"}
            onChange={handleChange}
             /> basico
             <InputRadio 
             type="radio"
             name='plan'
             value="completo" 
             checked={plan == "completo"}
             onChange={handleChange}/> Completo
        </Campo>
        <Button>cotizar</Button>
    </form>
  )
}

Formulario.proptypes = {
    setResumen: PropTypes.func.isRequired,
    setShowSpinner: PropTypes.func.isRequired
}

export default Formulario