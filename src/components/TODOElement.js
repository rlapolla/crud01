import React from 'react'
import './mycss.css'

const TODOElement = ({elemento, deleteTarea, togleTarea, setTareaEdit, tareaEdit, setCambiosEdit}) => {

    const { id, description, title, completed} = elemento;
    return (
        // <div className="card mt-3 bg-light">
        <div className={`card mt-3 ${ tareaEdit?.id === id?"bg-light border-info":""} `}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h3
                        className={`card-title ${completed?"font-italic text-secondary text-decoration-line-through":""}`}>
                        { title }
                     </h3>
                    <button 
                        disabled={!tareaEdit?false:tareaEdit.id === id}
                        className={`btn btn-sm ${completed?"btn-outline-warning":"btn-success"}`}
                        onClick = { () => { togleTarea( id )} }>
                        {completed?"rehacer":"terminar"}
                    </button>
                </div>
                <p className="card-text">{ description }</p>
                <hr />
                <button 
                    disabled={!tareaEdit?false:tareaEdit.id === id}
                    className="btn btn-sm btn-primary mr-2"
                    onClick = {()=>{setTareaEdit(elemento); setCambiosEdit(false)}}>
                    editar
                </button>
                <button 
                    disabled={!tareaEdit?false:tareaEdit.id === id}
                    className="btn btn-sm btn-danger"
                    onClick = { () => { deleteTarea( id )}}>
                    eliminar
                </button>
            </div>
        </div>
    )
}

export default TODOElement
