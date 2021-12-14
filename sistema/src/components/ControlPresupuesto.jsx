import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({ presupuesto, gastos, setgastos, setpresupuesto, setIsValidPresupuesto }) => {

    const [porcentaje, setporcentaje] = useState(0);
    const [disponible, setdisponible] = useState(0);
    const [gastado, setgastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;


        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        setdisponible(totalDisponible);
        setgastado(totalGastado);
        setTimeout(() => {
            setporcentaje(nuevoPorcentaje);
        }, 1500);

    }, [gastos]);



    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    const handleRecetApp = () => {
        const resultado = confirm('Deseas reiniciar presupuesto?')

        if (resultado) {
            setgastos([]);
            setpresupuesto(0)
            setIsValidPresupuesto(false);
        }
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#ef5656' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#ef5656' : '#3B82F6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />

                <div className="contenido-presupuesto">
                    <button
                        className="reset-app"
                        type="burron"
                        onClick={handleRecetApp}
                    >
                        Recetear App
                    </button>
                    <p>
                        <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                    </p>
                    <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                        <span>Disponible: </span> {formatearCantidad(disponible)}
                    </p>
                    <p>
                        <span>Gastado: </span> {formatearCantidad(gastado)}
                    </p>
                </div>
            </div>
        </div>
    );

};

export default ControlPresupuesto;