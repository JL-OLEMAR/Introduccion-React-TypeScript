const TiposBasicos = () => {
  const nombre: string = 'Fernando'
  const edad: number = 35
  const estaActivo: boolean = true

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

  return (
    <div>
      <h3>TiposBasicos</h3>
      {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </div>
  )
}

export default TiposBasicos
