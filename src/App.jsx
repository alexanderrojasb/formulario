import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import eliminar from './img/ELIMINAR.svg'
import agregar from './img/AGREGAR.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Edit } from './components/Edit'

function App() {
  const [contacts, setContacts] = useState([{ id: 1 }])
  const [showEdit, setShowEdit] = useState(false); // Estado para controlar la visibilidad del componente Edit
  const [data, setData] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE3MDQ1NTIzOTcsImV4cCI6MTcwNDU1OTU5N30.aDgc09skB4zXJhIcy-jUb9-gXc-gVvDdxaGC2MTdmL8'
    }
  }
  useEffect(() => {
    fetch('http://sv-e2ukmdxmyh.cloud.elastika.pe/', options)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then(err => Promise.reject(err))
      }
    })
  }, [])
  


  const addContact = () => {
    const newContactId = contacts.length + 1;
    setContacts([...contacts, { id: newContactId }]);
  };

  const removeContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  const handleEditClick = () => {
    setShowEdit(true); // Mostrar el componente <Edit />
  };

  const handleCancelClick = () => {
    setShowEdit(false); // Ocultar el componente <Edit />
  };

  return (
      <div className="container flex flex-col px-5 py-4 mx-auto">
        <header className="flex flex-wrap mx-auto w-auto gap-2">
          <a className='flex text-lg justify-center items-center gap-2 bg-gray-100 font-nunito rounded-t-2xl py-2 px-6'>
            Información
          </a>
          <a className='flex text-lg justify-center items-center gap-2 bg-white font-nunito rounded-t-2xl py-2 px-6'>
            Contacto
          </a>
          <a className='flex text-lg justify-center items-center gap-2 bg-gray-100 font-nunito rounded-t-2xl py-2 px-6'>
            Galería
          </a>
          <a className='flex text-lg justify-center items-center gap-2 bg-gray-100 font-nunito rounded-t-2xl py-2 px-6'>
            Dirección
          </a>
        </header>
        <div className=" bg-white shadow-container ring-gray-900/5 sm:mx-auto rounded-tr-2xl rounded-b-2xl w-574 h-auto pb-10 flex flex-col">
          <div className="md:px-8 ">
            <ul>
            {data?.map((user) => (
                <li key={user.id}>{user.contact_name}</li>
            ))}
            </ul>
            {/* {contacts.map((contact) => (
              <form key={contact.id} className='gap-4 flex flex-col py-3 border-t'>
                <div className='flex justify-between'>
                  <label htmlFor="" className='text-purple-dark font-nunito text-lg'>Contacto {contact.id}</label>
                  <span className='cursor-pointer' onClick={() => removeContact(contact.id)}>
                    <img src={eliminar} alt="" />
                  </span>
                </div>
                <input type="text" name="" id="" className='w-full rounded-lg bg-gray-search py-2 px-4 border border-gray-400 text-base text-black focus:ring-2 outline-none ring-violet-blue ' placeholder='Nombre Nombre Apellido Apellido' />
                <div className='flex gap-4'>
                  <input type="text" name="" id="" className='w-177 rounded-lg bg-gray-search py-2 px-4 border border-gray-400 text-base text-black focus:ring-2 outline-none ring-violet-blue ' placeholder='999 999 999'/>
                  <input type="text" name="" id="" className='w-full rounded-lg bg-gray-search py-2 px-4 border border-gray-400 text-base text-black focus:ring-2 outline-none ring-violet-blue ' placeholder='contact@empresa.com'/>
                </div>
              </form>
            ))} */}
          </div>
        </div>
        <div className='sm:mx-auto'>
          <footer className=" bg-white shadow-container ring-gray-900/5  my-7 rounded-2xl w-574 h-auto py-4 text-violet-blue font-nunito px-4 flex items-center flex-col">
            <span className='flex gap-2 cursor-pointer text-lg' onClick={addContact}>
              <img src={agregar} alt="" className=' w-5'/>
              <p>Añadir nuevo contacto</p>
            </span>
          </footer>
          {showEdit ? (
            <Edit onCancelClick={handleCancelClick} />
          ) : (
            <div className='flex flex-inline items-start gap-5'>
              <button className='shadow-button rounded-xl border border-black py-1 px-4 font-nunito text-lg' onClick={handleEditClick}>Editar</button>
            </div>
          )}
        </div>
      </div>
  )
}

export default App
