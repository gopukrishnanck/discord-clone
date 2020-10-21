import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import Sidebar from './Sidebar'
import Chat  from './Chat'
import {selectUser} from './features/userSlice'
import Login from './Login';
import {auth,provider} from './Firebase'
import {login,logout} from './features/userSlice'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log('user is',authUser);
      if(authUser){
        dispatch(login({
          uId:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))

      }
      else{
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    
    <div className="App">
      {user?(
        <>
      <Sidebar/>
     <Chat/>
     </>
      ):(
        <Login/>
      )}
    </div>
  );
}

export default App;