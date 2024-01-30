import { useId } from "react"


export const MiComponente = () => {
    const id = useId();
    const segundo_id= useId();
    const tercer_id = useId();

    console.log(id)
    console.log(segundo_id)
    console.log(tercer_id)

  return (
    <div>
        <h1>Hook useID</h1>
        <input type="text" id={id} name="nombre" placeholder="Nombre" />
    </div>
  )
}
