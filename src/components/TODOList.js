import React from 'react'
import TODOElement from './TODOElement'

const TODOList = ({tareas, deleteTarea, togleTarea, setTareaEdit, tareaEdit, setCambiosEdit}) => {
   
    return (
        <>
            <h1>Listado {tareas.length !== 0 && "("+tareas.length+")"}</h1>
            { tareas.length === 0
                ? <p>no se registran tareas!</p>
                : tareas.map((elem, index) => 
                    <TODOElement 
                        setTareaEdit = { setTareaEdit }
                        deleteTarea = { deleteTarea }
                        togleTarea = { togleTarea }
                        elemento = { elem } 
                        key = { index }
                        tareaEdit = { tareaEdit }
                        setCambiosEdit = { setCambiosEdit }
                    />) 

            }
        </>
    )
}

export default TODOList
