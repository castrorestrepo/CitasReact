import React, { Component } from 'react';
import uuid from 'uuid';
const stateInicial ={
    cita: {
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    } ,
    error: false

}


export class NuevaCita extends Component {
    state = {...stateInicial}
//cuando el suuario escribre ne los imputs
    handleChange = e => {
        
        //llevar los valores al state
        this.setState (
            {
                cita:{
                    //...this.state.cita realiza una copia de state para 
                    //no perder las propiedades o estado actual 
                    ...this.state.cita,
                    [e.target.name] : e.target.value
                }
               
            }
        )
      
    }

    // cuando el suuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();
        //extraer los valores del state  y validar que esten llenos 
         const {mascota,propietario,fecha,hora,sintomas} = this.state.cita;
        if (mascota === '' || propietario ===  '' || fecha === '' || hora === ''|| sintomas === '' ){

            this.setState({
                error: true
            });
            return;

        }else
        {
            this.setState({
                ...stateInicial
            });

            //generar objeto con los datos antes de enviarlo
            
            const nuevaCita = {...this.state.cita};
            nuevaCita.id = uuid();
            //console.log(nuevaCita.id);
            //en caso de estar biena gregar la cita
            this.props.crearNuevaCita(nuevaCita);
           


        }
        
    }

    render() {

        const {error} = this.state;

        return (
            <div className="card mt-4 py-4">
                <div className ="card-body">
                    <h2 className="card-title text-center mb-5">Diligenciar los datos para crear nueva cita</h2>
                
                { error ? <div className="alert alert-danger mt2 mb-5"> * Todos los campos son requeridos! </div>
                : null}

                
                <form onSubmit={this.handleSubmit}>  
                    <div className="form-group row">
                        <label className= "col-sm-4 col-lg-2 col-form-label">Nombre paciente:</label>
                        <div className = "col-sm-8 col-lg-10">
                            <input 
                                type= "text"
                                className ="form-control"
                                placeholder = "Nombre mascota"
                                name ="mascota"
                                onChange={this.handleChange}
                                value = {this.state.cita.mascota}
                            />
                        </div>
                    </div>{/* form-goup */}
                  
                    <div className="form-group row">
                        <label className= "col-sm-4 col-lg-2 col-form-label">Nombre Dueño:</label>
                        <div className = "col-sm-8 col-lg-10">
                            <input 
                                type= "text"
                                className ="form-control"
                                placeholder = "Nombre del dueño de la mascota"
                                name ="propietario"
                                onChange={this.handleChange}
                                value = {this.state.cita.propietario}
                            />
                        </div>
                    </div>{/* form-goup */}

                    <div className="form-group row">
                        <label className= "col-sm-4 col-lg-2 col-form-label">Fecha cita:</label>
                        <div className = "col-sm-8 col-lg-4">
                            <input 
                                type= "date"
                                className ="form-control"
                                 name ="fecha"
                                 onChange={this.handleChange}
                                 value = {this.state.cita.fecha}
                            />
                        </div>
                        <label className= "col-sm-4 col-lg-2 col-form-label">Hora cita:</label>
                        <div className = "col-sm-8 col-lg-4">
                            <input 
                                type= "time"
                                className ="form-control"
                                 name ="hora"
                                 onChange={this.handleChange}
                                 value = {this.state.cita.hora}
                            />
                        </div>
                    </div>{/* form-goup */}

                    <div className="form-group row">
                        <label className= "col-sm-4 col-lg-2 col-form-label">Sintomas:</label>
                        <div className = "col-sm-8 col-lg-10">
                            <input 
                                type= "textarea"
                                className ="form-control"
                                placeholder = "Describe los sintomas que presenta la mascota de forma detallada"
                                name ="sintomas"
                                onChange={this.handleChange}
                                value = {this.state.cita.sintomas}
                            />
                        </div>
                    </div>{/* form-goup */}

                    <input 
                    type="submit" 
                    className="py-3 mt-2 btn btn-success btn-block" 
                    value="Agregar Nueva Cita"
                    
                    ></input>

                </form>
                </div>
            </div>
        )
    }
}

export default NuevaCita
