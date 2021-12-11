import React, { useEffect, useState } from 'react'
import TODOForm from './components/TODOForm'
import TODOList from './components/TODOList'

const elementos = [{
        id: 1,
        title: "título UNO",
        description: "descripcion UNO",
        completed: false},
    {
        id: 2,
        title: "título DOS",
        description: "descripcion DOS",
        completed: true},
    {
        id: 3,
        title: "título TRES",
        description: "descripcion TRES",
        completed: false}    
    ]

const elemPersistidos = JSON.parse( localStorage.getItem( 'elementos' ))

export const App = () => {

    const [tareas, setTareas] = useState( elemPersistidos || elementos );

    useEffect(() => {
        localStorage.setItem('elementos', JSON.stringify(tareas));        
    }, [tareas])

    const deleteTarea = (id) => {
        const nuevos = tareas.filter(tarea => tarea.id !== id);
        setTareas( nuevos );
    }

    const togleTarea = (id) => {
        setTareas( tareas.map( tarea => tarea.id === id ? {...tarea, completed: !tarea.completed} : tarea
                ))
    }

    const tareaAdd = ( tarea ) => {
        const nuevaTarea = {
            ...tarea,
            completed: false,
            id: Date.now()
        };
        setTareas( [nuevaTarea, ...tareas] )
    }

    const [tareaEdit, setTareaEdit] = useState(null);

    const handleTareaEdit = ( tareaEdit ) =>  {
        setTareas ( tareas.map( tarea => { 
                if (tareaEdit.id === tarea.id) {
                    if( tareaEdit.title !== "")
                        return tareaEdit
                }
                return tarea
            }
        ))
        setTareaEdit(null);
    }

    const [cambiosEdit, setCambiosEdit] = useState(false);
        
    return (
        <div className="container">
            <h2 className="bg-secondary text-white pl-2 mt-5"> TAREAS</h2>
            <div className="small">REACT TODO-App by <a href="mailto:rlapolla@gmail.com">rlapolla@gmail.com</a> - <a target="_blank" href="https://github.com/rlapolla/crud01.git"> GitHub</a></div>
            <hr />
            <div className="row">
                <div className="col-8">
                    <TODOList
                        tareas = { tareas }
                        deleteTarea = { deleteTarea }
                        togleTarea = { togleTarea }
                        setTareaEdit = { setTareaEdit }
                        tareaEdit = { tareaEdit }
                        setCambiosEdit = { setCambiosEdit }
                    />
                </div>
                <div className={`col-4 ${ tareaEdit?"card bg-light border-info":""} `} >
                    <TODOForm 
                        tareaAdd = { tareaAdd }
                        tareaEdit = { tareaEdit }
                        setTareaEdit = { setTareaEdit }
                        handleTareaEdit = { handleTareaEdit }
                        cambiosEdit = { cambiosEdit }
                        setCambiosEdit = { setCambiosEdit }
                    />
                </div>
            </div>
        </div>
    )
}
