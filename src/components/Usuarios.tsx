import useUsuarios from '../hooks/useUsuarios'
import { Usuario } from '../interfaces/reqRes'

const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios()

  const renderItem = ({ id, avatar, first_name, last_name, email }: Usuario) => {
    return (
      <tr key={id}>
        <td>
          <img
            className="rounded-circle w-25"
            loading='lazy'
            src={avatar}
            alt={first_name}
          />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table thead-dark">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(renderItem)}
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={paginaAnterior}
      >
          Anteriores
      </button>
      &nbsp;

      <button
        className="btn btn-primary"
        onClick={paginaSiguiente}
      >
          Siguientes
      </button>
    </>
  )
}

export default Usuarios
