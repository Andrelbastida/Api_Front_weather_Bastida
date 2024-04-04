import React from "react";
import './TempInfo.css'

function Tempinfo(){
    return(
        <div className="TempContainer">
            <span>
                
                <div className="Cidade">
                    <h1>Sorocaba</h1>
                    <h1> 19 C </h1>
                </div>
                <div className="Condicao">
                    <h1>Nublado</h1>
                    <h1>Vento: X km/h</h1>
                    <h1>Umidade: Y%</h1>
                </div>
            </span>
        </div>
    )
}

export default Tempinfo