import React from 'react'
import Navbar from "./Components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  )
}

export default App

// import React, { useContext, useEffect, useState } from 'react'
// import Login from './components/Auth/Login'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const [userData,SetUserData] = useContext(AuthContext)

//   useEffect(()=>{
//     const loggedInUser = localStorage.getItem('loggedInUser')
    
//     if(loggedInUser){
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data)
//     }

//   },[])


//   const handleLogin = (email, password) => {
//     if (email == 'admin@me.com' && password == '123') {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } else if (userData) {
//       const employee = userData.find((e) => email == e.email && e.password == password)
//       if (employee) {
//         setUser('employee')
//         setLoggedInUserData(employee)
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
//       }
//     }
//     else {
//       alert("Invalid Credentials")
//     }
//   }



//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
//     </>
//   )
// }

// export default App