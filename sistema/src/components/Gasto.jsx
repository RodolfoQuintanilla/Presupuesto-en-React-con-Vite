
import React from 'react';
import { formatearFecha } from '../helpers/index'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import icono_ahorro from '../img/icono_ahorro.svg';
import icono_casa from '../img/icono_casa.svg';
import icono_comida from '../img/icono_comida.svg';
import icono_gastos from '../img/icono_gastos.svg';
import icono_ocio from '../img/icono_ocio.svg';
import icono_salud from '../img/icono_salud.svg';
import icono_suscripciones from '../img/icono_suscripciones.svg';


const diccionarioIconos = {
    ahorro: icono_ahorro,
    Comida: icono_comida,
    Casa: icono_casa,
    Ocio: icono_ocio,
    Salud: icono_salud,
    GastosVarios: icono_gastos,
    Suscripciones: icono_suscripciones
};

const Gasto = ({ gasto, setgastoEditar, eliminarGasto }) => {
    const { categoria, nombre, cantidad, fecha, id } = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setgastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => eliminarGasto(id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={diccionarioIconos[categoria]}
                            alt="IconoGasto"
                        />
                        <div className="descripcion-gasto">

                            <p className="categoria">
                                {categoria}
                            </p>
                            <p className="gasto"> {nombre}</p>
                            <p className="fecha-gasto">
                                Agregado el: {''}
                                <span>{formatearFecha(fecha)}</span>
                            </p>

                        </div>

                    </div>
                    <p className="cantidad-gasto">$ {cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Gasto;