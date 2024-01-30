import { useForm } from "./hooks/useForm"


export const MiFormulario = () => {
    const {formulario, enviado, cambiado} = useForm({})

  return (
    <div>
        <h1>Mi Formulario</h1>
        <h2>Formulario para guardar un curso</h2>
        <p>Curso guardado: {formulario.titulo}</p>
        <pre className="codigo">{JSON.stringify(formulario)}</pre>

        <form onSubmit={enviado} className="mi-formulario">
            <input type="text" name="titulo" onChange={cambiado} placeholder="Titulo:" />
            <input type="number" name="anio" onChange={cambiado} placeholder="Año Publicación:" />
            <textarea name="descripcion" onChange={cambiado} placeholder="Descripción:" />
            <input type="text" name="autor" onChange={cambiado} placeholder="Autor:" />
            <input type="email" name="email" onChange={cambiado} placeholder="Correo de contacto:" />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
