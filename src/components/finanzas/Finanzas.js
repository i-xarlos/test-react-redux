import React from 'react'

export default function Finanzas({ finanzas, eliminarFinanza }) {
  return (
    <div className='column is-half'>
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {finanzas.map((row, i) => (
            <tr key={i}>
              <td>{row.desc}</td>
              <td>{row.cant}</td>
              <td>
                <button
                  className='button is-warning'
                  onClick={() => eliminarFinanza(i)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
