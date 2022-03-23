import React from 'react'
import { connect } from 'react-redux'
import { agregar, eliminar } from './state/modules/finanza/finanzas'
import { fetchUsuarios } from './state/modules/user/usuarios'
import Form from './components/form/Form'
import Dashboard from './components/dashboard/Dashboard'
import Finanzas from './components/finanzas/Finanzas'
import './App.css'

function Titulo() {
  return <h2 className='title'>Finanzly</h2>
}

function App({ finanzas, agregarFinanza, eliminarFinanza, fetchUsuarios }) {
  const total = finanzas.reduce((acc, el) => acc + el.cant, 0)
  return (
    <div className='section'>
      <div className='container'>
        <Titulo />
        <button onClick={fetchUsuarios}>Fetch usuarios</button>
        <Form agregarFinanza={agregarFinanza} />
        <Dashboard valor={total} />
        <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  agregarFinanza: finanza => dispatch(agregar(finanza)),
  eliminarFinanza: index => dispatch(eliminar(index)),
  fetchUsuarios: () => dispatch(fetchUsuarios()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
