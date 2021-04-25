import React, { Fragment } from 'react';

const Formulario = () => {
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
                />
                 <label>Nombre Dueño</label>
                <input 
                 type="text"
                 name="mascota"
                 className="u-full-width"
                 placeholder="Nombre Dueño Mascota"
                />
                 <label>Fecha</label>
                <input 
                 type="date"
                 name="fecha"
                 className="u-full-width"
                />
                <label>Hora</label>
                <input 
                 type="time"
                 name="hora"
                 className="u-full-width"
                />
                <label>Síntomas</label>
                <textarea 
                 className="u-full-width"
                 name="sintomas"
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