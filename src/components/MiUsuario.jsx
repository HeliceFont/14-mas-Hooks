import { useState } from "react"
import { useAjax } from "./hooks/useAjax"


export const MiUsuario = () => {
    const [url, setUrl] = useState("https://reqres.in/api/users/1")
    const {datos, cargando} = useAjax(url)
   
    
    const getId = e=>{
        let id = parseInt( e.target.value)
        setUrl("https://reqres.in/api/users/"+ id);
        
    }

    

  return (
    <div>
        <h1>Mi usuario</h1>
        <h2>Datos del usuario:</h2>
        <p>{ cargando ? "Cargando..." : ""}</p>
        <p>Nombre: {datos?.first_name}</p>
        <p>Apellidos: {datos?.last_name}</p>
        <p>email: {datos?.email}</p>
        <input type="number" name="id" onChange={ getId} />
    </div>
  )
}
