import React, { useEffect, useState } from 'react'

const formuInicial = {
    title: "",
    description: ""
}

const TODOForm = ({ tareaAdd, tareaEdit, setTareaEdit, handleTareaEdit, setCambiosEdit, cambiosEdit }) => {
    
    const [formValues, setFormValues] = useState(formuInicial)
    const { title, description } = formValues;
    
    useEffect(() => {
        if (tareaEdit){
            setFormValues(tareaEdit);
            seterrorMsg(null)
        }
    }, [tareaEdit])
    
    const [errorMsg, seterrorMsg] = useState(null);

    const [okMsg, setokMsg] = useState(null);

    useEffect(() => {
        if (formValues.title !== "")
            seterrorMsg( null )
    }, [formValues])
    
    const handleInputChange = (e) => {        
        setFormValues( {...formValues, [e.target.name]:e.target.value });
        setCambiosEdit( true );
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if ( tareaEdit ){
            handleTareaEdit( formValues )
            if (tareaEdit !== formValues )
                setokMsg("Tarea editada.");
        } else {
            if (title !== ""){
                tareaAdd( formValues );
                setokMsg("Tarea agregada.");
                seterrorMsg( null );
            } else {
                seterrorMsg("Se requiere título.");
            }
        }
        setTimeout(() => {
            setokMsg( null );
            }, 2000);

        setFormValues( formuInicial );
        setCambiosEdit(false);
    }

    const handleCancelEdit = () =>{
       setFormValues( formuInicial );
       setTareaEdit(null);
    }

    return (
    <div className="">
        <h3>
            {tareaEdit?"editando Tarea...":"nueva Tarea:"}
        </h3>
        <form onSubmit={ handleSubmit } >
            <input 
                type = "text"
                placeholder = "título"
                className = "form-control mt-3"
                value = { title }
                name = "title"
                onChange = { handleInputChange }
                />
            <textarea
                placeholder = "descripción"
                className = "form-control mt-2"
                value = { description }
                name = "description"
                onChange = { handleInputChange }
                >
            </textarea>

            <div className="row">
                <div className="col">
                    <button
                        className="btn btn-primary btn-block mt-2">
                        {tareaEdit?cambiosEdit?"Guardar cambios":"Cancelar":"Agregar"}
                    </button>
                </div>
                    { (tareaEdit?cambiosEdit:false) && (
                        <div className="col">
                            <button
                                onClick={handleCancelEdit}
                                className="btn btn-warning btn-block mt-2" >
                                Cancelar edición
                            </button>
                        </div>
                    )} 
            </div>
            {   errorMsg && (
                <div className="alert alert-danger mt-2">
                    { errorMsg }
                </div>
                )
            }
            {   okMsg && (
                <div className="alert alert-success mt-2">
                    { okMsg }
                </div>
                )
            }

        </form>
    </div>
    )
}

export default TODOForm
