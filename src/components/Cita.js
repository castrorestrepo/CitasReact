import React from 'react'

const Cita = ({cita,eliminarCita}) => {
    return (
       
            <div className="media-body">
                  <h3 className="mt-0  bg-primary">{cita.mascota} </h3>
                  <p className="card-text"> <span>Propietario:</span> {cita.propietario}</p>
                  <p className="card-text"> <span>Fecha:</span>{cita.fecha}</p>
                  <p className="card-text"> <span>Hora:</span> {cita.hora}</p>
                  <p className="card-text"> <span>Sintomas:</span></p>
                  <p className="card-text"> {cita.sintomas}</p>
                  <button 
                    className ="btn btn-danger"
                    onClick ={() => eliminarCita(cita.id)}
                  >  Borrar &times;</button>
                </div>
                
      
    )
   
}

export default Cita
