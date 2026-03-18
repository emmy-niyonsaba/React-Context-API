import React,{useContext} from 'react'
import { AppContext } from '../App'

const UpdateProfile = () => {
  const {setUser,user } = useContext(AppContext)

const handleSubmit = (e) =>{
    e.preventDefault()
    const [name,age,gendar] = e.target.elements
    setUser({
      ...user,
        name:name.value,
        age:Number(age.value),
        gendar:gendar.value
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Enter Name ' />
        <input type="number" name='age' placeholder='Enter Age' />
        <select name="gendar" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type='submit'>Update|Set</button>
      </form>
    </div>
  )
}

export default UpdateProfile
