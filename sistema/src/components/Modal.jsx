import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setmodal, animarModal, setanimarModal, guardarGasto, gastoEditar, setgastoEditar }) => {


    const [mensaje, setmensaje] = useState('')

    const [nombre, setNombre] = useState('');
    const [cantidad, setcantidad] = useState('');
    const [categoria, setcategoria] = useState('');
    const [fecha, setfecha] = useState('')
    const [id, setid] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setcantidad(gastoEditar.cantidad)
            setcategoria(gastoEditar.categoria)
            setid(gastoEditar.id)
            setfecha(gastoEditar.fecha)
        }

    }, []);

    const ocultarModal = () => {
        setanimarModal(false)
        setgastoEditar({})
        setTimeout(() => {
            setmodal(false);
        }, 500);
    };




    const handleSubmit = (e) => {
        e.preventDefault();


        if ([nombre, cantidad, categoria].includes('')) {
            setmensaje('Todos Los Campos Son Obligatorios');


            setTimeout(() => {
                setmensaje('');
            }, 3000);

            return;
        }

        guardarGasto({ nombre, cantidad, categoria, id, fecha });
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="cerrae modal"
                    onClick={ocultarModal}
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>

                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input
                        id='nombre'
                        type="text"
                        placeholder="Añade un Gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        id='cantidad'
                        type="number"
                        placeholder="Añade la Cantidad del gasto Eje. 200"
                        value={cantidad}
                        onChange={e => setcantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>

                    <select
                        id='categoria'
                        value={categoria}
                        onChange={e => setcategoria(e.target.value)}
                    >
                        <option value="">--Selecciones-- </option>
                        <option value="ahorro"> Ahorro </option>
                        <option value="Comida"> Comida </option>
                        <option value="Casa"> Casa </option>
                        <option value="Ocio"> Ocio </option>
                        <option value="Salud"> Salud </option>
                        <option value="GastosVarios"> Gastos Varios </option>
                        <option value="Suscripciones"> Suscripciones </option>
                    </select>
                </div>

                <input type="submit"
                    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
                />
            </form>
        </div>
    );

};

export default Modal;