
import { useEffect, useState, useRef } from 'react' 
import './style.css'
import Trash from '../../assets/lixo.svg'
import api from '../../services/api'

function Home() {

  // const usersArray = [{
  //   id: '1234123412',
  //   name: 'Rodolfo',
  //   age: 33,
  //   email: 'rod@email.com',
  // }, {
  //   id: '5253463',
  //   name: 'Aline',
  //   age: 28,
  //   email: 'Aline@email.com',
  // },
  // ]

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuario', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    })

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  },[])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" name='nome' placeholder='nome' ref={inputName}/>
        <input type="idade" name='idade' placeholder='idade' ref={inputAge}/>
        <input type="email" name='email' placeholder='email' ref={inputEmail}/>

        <button type='button' onClick={createUsers}>Cadastrar</button>

      </form>

      {users.map((user) => (

        <div key={user.id} className='card' >
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>

      ))}

    </div>

  )
}

export default Home
