import {createContext,useState} from 'react'
import Profile from './components/Profile'
import UpdateProfile from './components/updateProfile'

export const AppContext = createContext()


function App() {
  
  const [user,setUser] = useState({
  name:'Please set your name',
  age:0,
  gendar:'Not set'

})
const [className,setClassName] = useState('')
const contextValue = {
  user,
  setUser,
  className,
  setClassName
}
  return (
    <>
 <div>
     <AppContext.Provider value={contextValue}>
      <Profile />
   
    <UpdateProfile />
    </AppContext.Provider>
 </div>
    
    </>
  )
}

export default App
