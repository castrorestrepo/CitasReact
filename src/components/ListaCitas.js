import React from "react";
import Cita from './Cita.js';

const ListaCitas = ({citas,eliminarCita}) => {
  
const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Lista de Citas';

  return (
    <div className="card mt-1 py-4">
      <div className="card-body">
        <h2 className="card-title text-center"> {mensaje}</h2>
        <div className="list-citas">
            {citas.map(cita =>(
                <Cita 
                    key={cita.id}
                    cita={cita} 
                    eliminarCita={eliminarCita}
                />
            ) )}
        </div>
      </div>
    </div>
  );
};

export default ListaCitas;
