import React, { Fragment } from 'react'
import { firstUpperCase } from '../Helpe'
import styled from '@emotion/styled'
import PropTypes from "prop-types"

const ContainerResumen = styled.div`
text-align: center;
padding: 1rem;
background-color: #00838f;
margin-top: 1rem;
color: #fff

`


const Resumen = ({datos}) => {

    const {year,mark,plan} = datos

    if(year == ""||mark == ""|| plan == "") {return null}


  return (
    <ContainerResumen>
        <h2>Resumen de cotizacion</h2>
        <ul>
            <li>Año: {year}</li>
            <li>Marca: {firstUpperCase(mark)}</li>
            <li>Plan: {firstUpperCase(plan)}</li>
        </ul>
    </ContainerResumen>
  )
}

Resumen.prototype = {
  datos: PropTypes.object.isRequired
}

export default Resumen