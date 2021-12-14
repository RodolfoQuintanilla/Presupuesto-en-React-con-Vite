import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ({ presupuesto, setpresupuesto, setIsValidPresupuesto }) => {

    const [mensaje, setmensaje] = useState('');

    const handlepresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setmensaje('No es un presupuesto valido');
            return;
        }
        setmensaje('');
        setIsValidPresupuesto(true);
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form
                onSubmit={handlepresupuesto}
                className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={(e) => setpresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            </form>


        </div>
    );

};

export default NuevoPresupuesto;