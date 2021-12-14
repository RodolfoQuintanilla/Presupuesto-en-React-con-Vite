import Gasto from './Gasto';

const ListadoGastos = ({ gastos, setgastoEditar, eliminarGasto, filtros, gastosFiltrados }) => {

    //const [state, setstate] = useState(initialState);


    return (
        <div className="listado-gastos contenedor">

            {
                filtros ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setgastoEditar={setgastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (

                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setgastoEditar={setgastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>

                )

            }


        </div>
    );

};

export default ListadoGastos;