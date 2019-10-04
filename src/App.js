import React, { Component } from 'react';
import Header from './components/Header.js'
import './bootstrap.min.css';
import NuevaCita from './components/NuevaCita.js';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state ={
     citas: []
  }

  //cuando se carga la aplicacion
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState(
        {
           citas: JSON.parse(citasLS)
        }
      )
     
    }
  }

  //cuando eliminadmos o acgrregamos una cita 
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearNuevaCita = (datos) =>{
    //copiar el state actual
    const citas = [...this.state.citas, datos]
    //agregar el neuvo state
    this.setState(
      {
        citas
      }
    )
  }

  //elimina una cita del state
  eliminarCita = id => {
    //crear una copias del state 

    const citasActuales = [...this.state.citas];

    //dps utilizar filter para sacar el id del areglo 
    const citas = citasActuales.filter(cita => cita.id !== id )
    //actualizar el state
    this.setState(
      {
        citas
      }
    )

    console.log('Procediendo a elimianr le cita Nro:' +  id);
  }


  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de citas"></Header>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita = {this.crearNuevaCita} /> 
          </div>
          <div className="col-md-10 mx-auto">
            <ListaCitas 
              citas = {this.state.citas} 
              eliminarCita={this.eliminarCita}>
            </ListaCitas>  
          </div>
              
            
        </div>
        
      </div>
    );
  }
}
export default App;