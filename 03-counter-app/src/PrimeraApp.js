import React from "react";
import PropTypes from "prop-types";
// import { Fragment } fro m "react/cjs/react.production.min";

const PrimeraApp = ({saludo, subtitulo = 'Este es un parrafo', contenido}) => {
    const objeto = {
        nombre: 'David Ruano',
        edad: 27
    }

    return (
    <>
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
        <p>{contenido}</p>
        <pre>{JSON.stringify(objeto, null, 3)}</pre>
    </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    contenido: 'Este es mi contenido'
}

export default PrimeraApp;