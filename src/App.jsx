import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import { Outlet } from 'react-router-dom'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
   authService.getCurrentUser()
   .then((userData)=>{
    if(userData) {
     dispatch(login({userData}))
    }else{
     dispatch(logout())
    }
   })
   .catch((error)=>{
    console.log("Auth error:", error);
    dispatch(logout())
   })
   .finally(()=>setLoading(false))
  },)

  return !loading ? (
    <div>
      <div>
        <Header/>
        <main>
          Todo:<Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
