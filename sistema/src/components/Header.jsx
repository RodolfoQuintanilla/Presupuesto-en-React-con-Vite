import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ presupuesto, setpresupuesto }) => {



    return (
        <header>
            <h1>Planificador de Gastos</h1>
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setpresupuesto={setpresupuesto}
            />
        </header>
    );

};

export default Header;