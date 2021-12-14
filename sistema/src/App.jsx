
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers/index';
import IngresaNuevoGasto from './img/nuevo-gasto.svg';
import Filtros from './components/Filtros';

function App() {

  const [gastos, setgastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  const [presupuesto, setpresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(0);

  const [modal, setmodal] = useState(false);
  const [animarModal, setanimarModal] = useState(false);

  const [gastoEditar, setgastoEditar] = useState({});

  const [filtros, setfiltros] = useState('')
  const [gastosFiltrados, setgastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setmodal(true);

      setTimeout(() => {
        setanimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {

    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if (filtros) {
      //Filtar Gatos por categoria

      const gastosFiltrados = gastos.filter(gasto => gasto.categoria ===
        filtros);

      setgastosFiltrados(gastosFiltrados)
      console.log(gastosFiltrados);
    }
  }, [filtros])


  useEffect(() => {
    const prepuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (prepuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])




  const handleNuevoGasto = () => {
    setmodal(true);
    setgastoEditar({});
    setTimeout(() => {
      setanimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {

    if (gasto.id) {
      const gastoActualizado = gastos.map(gastoState => gastoState.id ===
        gasto.id ? gasto : gastoState);
      setgastos(gastoActualizado);

      setgastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setgastos([...gastos, gasto]);
    }


    setanimarModal(false)
    setTimeout(() => {
      setmodal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosactualizados = gastos.filter(gasto => gasto.id !== id)

    setgastos(gastosactualizados);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <div>
        <Header
          gastos={gastos}
          setgastos={setgastos}
          presupuesto={presupuesto}
          setpresupuesto={setpresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />

        {isValidPresupuesto && (
          <>
            <main>
              <Filtros
                filtros={filtros}
                setfiltros={setfiltros}
              />

              <ListadoGastos
                gastos={gastos}
                setgastoEditar={setgastoEditar}
                eliminarGasto={eliminarGasto}
                filtros={filtros}
                gastosFiltrados={gastosFiltrados}
              />
            </main>
            <div className="nuevo-gasto">
              <img
                src={IngresaNuevoGasto}
                alt="IngresaNuevoGasto"
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )}

        {modal &&
          <Modal
            setmodal={setmodal}
            animarModal={animarModal}
            setanimarModal={setanimarModal}
            guardarGasto={guardarGasto}
            gastoEditar={gastoEditar}
            setgastoEditar={setgastoEditar}
          />}

      </div>
    </div>
  )
}

export default App
