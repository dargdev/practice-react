import React from "react";
import PropTypes from "prop-types";
const CounterApp = ( {value} ) => {
    return (
    <>
    <h1>CounterApp</h1>
    <h2>{value}</h2>

    <button onClick={function(e){console.log(e);}}> +1</button>
    </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;

