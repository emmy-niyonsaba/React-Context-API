
import React ,{useContext }from 'react'
import { AppContext } from '../App'

const Profile = () => {
  const { user } = useContext(AppContext)

  return (
    <div>
      <h2>Name: {user.name}</h2>  
      <h2>Age: {user.age}</h2>  
      <h2>Gender: {user.gendar}</h2>  
    </div>
  )
}

export default Profile
