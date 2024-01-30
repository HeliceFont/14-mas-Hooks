
import { useMayus } from "./hooks/useMayus"


export const PruebasCustom = () => {
    

    //recogemos el metodo mayusculas del hook useMayus.jsx y devuelve el valor
    const {estado, mayusculas, minusculas, concatenar} = useMayus("Texto del Hook UseMayus")
    
  return (
    <div>
        <h1>Pruebas Custom</h1>
        <h2>{estado}</h2>
        <button onClick={ mayusculas}>Poner en mayúsculas</button>
        <button onClick={ minusculas}>Poner en minúsculas</button>
        <button onClick={ e => concatenar("- Probando Hooks Personalizados")}>Concatenar un Texto</button>
    </div>
  )
}
