import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({ presupuesto,
    setpresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    gastos, setgastos }) => {



    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setgastos={setgastos}
                    setpresupuesto={setpresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setpresupuesto={setpresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
    );

};

export default Header;