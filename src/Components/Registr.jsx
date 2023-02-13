import React, { useState } from 'react'

const Registr = () => {
  const [show, setShow] = useState('none')
  const [name,setName] = useState('')
  const [lastname , setLastname] = useState('')
  const toggleMes = () => {
    setShow('block')
  }
  return (
    <form  onSubmit={(e)=>{
      e.preventDefault()
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = ''
      e.target[3].value = ''
      console.log(e)
      toggleMes()
    }} className='register-work'>
        <div className='App'>
      <div className={show}>Вы прошли регистрацию!</div>
      <br />

      <input type="text" className='i1' placeholder='Напишите свое имя' />
      <input type="text" className='i2' placeholder='Теперь свою фамилию' />
      <input type="text" className='i3' placeholder='А сюда электронный адрес' />
      <button className='btn'>Register</button>
      </div>
    </form>
  )
}

export default Registr


