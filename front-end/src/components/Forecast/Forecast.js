import React from "react";
import Card from "../Card/Card";
import './Forecast.css'


function Forecast(){
    return(
        <div className="ForecastContainer">
            <h1>I'm a forecast component</h1>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
    )


}

export default Forecast