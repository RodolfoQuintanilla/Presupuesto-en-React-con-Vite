
import { useState } from 'react';
import Header from './components/Header';


function App() {

  const [presupuesto, setpresupuesto] = useState(0);

  return (
    <div className="App">
      <div>
        <Header
          presupuesto={presupuesto}
          setpresupuesto={setpresupuesto}
        />
      </div>
    </div>
  )
}

export default App
