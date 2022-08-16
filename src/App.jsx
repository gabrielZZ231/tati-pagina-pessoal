import { useState } from 'react'
import Titulo from '../componentes/Titulo'
import Filtro from '../componentes/Filter'

function App() {
  return (
    <main>
      <div className='d-flex justify-content-center'>
          <Titulo></Titulo>
      </div>
      <div>
          <Filtro></Filtro>
      </div>
    </main>
  )
}

export default App
