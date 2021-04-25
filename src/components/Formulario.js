import React, { Fragment, useState } from 'react';

const Formulario = () => {
    // Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    //Funcion que se ejecuta cada que el usuario escribe un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //Extraer valores
    
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre mascota</label>
                <input 
                 type="text"
                 name="mascota"
                 className="u-full-width"
                 placeholder="Nombre mascota"
                 onChange={actualizarState}
                />
                 <label>Nombre Dueño</label>
                <input 
                 type="text"
                 name="mascota"
                 className="u-full-width"
                 placeholder="Nombre Dueño Mascota"
                 onChange={actualizarState}
                />
                 <label>Fecha</label>
                <input 
                 type="date"
                 name="fecha"
                 className="u-full-width"
                 onChange={actualizarState}
                />
                <label>Hora</label>
                <input 
                 type="time"
                 name="hora"
                 className="u-full-width"
                 onChange={actualizarState}
                />
                <label>Síntomas</label>
                <textarea 
                 className="u-full-width"
                 name="sintomas"
                 onChange={actualizarState}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
               >Agregar cita</button>
            </form>
        </Fragment>
        
    );
}
 
export default Formulario;