import { useEffect, useState } from "react";


const Filtros = ({ filtros, setfiltros }) => {
    return (
        <div className="filtros sombra contenedor">
            <form >
                <div>
                    <label>Filtrar Gastos</label>
                    <select
                        value={filtros}
                        onChange={(e) => setfiltros(e.target.value)}
                    >
                        <option value="">--Todas Las Categorias-- </option>
                        <option value="ahorro"> Ahorro </option>
                        <option value="Comida"> Comida </option>
                        <option value="Casa"> Casa </option>
                        <option value="Ocio"> Ocio </option>
                        <option value="Salud"> Salud </option>
                        <option value="GastosVarios"> Gastos Varios </option>
                        <option value="Suscripciones"> Suscripciones </option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Filtros;