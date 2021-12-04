import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ({ presupuesto, setpresupuesto }) => {

    const [mensaje, setmensaje] = useState('');

    const handlepresupuesto = (e) => {
        e.preventDefault();

        console.log(Number(presupuesto));


        if (!Number(presupuesto) || Number(presupuesto) < 0) {
            setmensaje('No es un presupuesto valido');
        } else {
            console.log('si es un presupuesto valido');
        }
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form
                onSubmit={handlepresupuesto}
                className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input
                        type="text"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={(e) => setpresupuesto(e.target.value)}
                    />
                </div>
                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            </form>


        </div>
    );

};

export default NuevoPresupuesto;