interface Direccion {
  pais: string;
  casaNo: number;
}

interface Persona {
  nombreCopleto: string;
  edad: number;
  direccion: Direccion
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCopleto: 'Fernando',
    edad: 35,
    direccion: {
      pais: 'Canada',
      casaNo: 615
    }
  }

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}

export default ObjetosLiterales
