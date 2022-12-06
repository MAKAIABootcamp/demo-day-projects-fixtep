import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const LoginAdmin = (isAdmin) => {
  const user = useSelector((store) => store.user);
console.log(user);

const [admim, setAdmim] = useState(true)

const adminLogged = ()=>{
  if(user.email === "anac.rojas88@gmail.com"){
   console.log('Es admin');
  }else{
    console.log('no es admin');
  }
}

useEffect(() => {
adminLogged();
  
}, [])
  // useEffect(() => {
  //   if (user.admin) {
  //     console.log('es administrador')
  //   } else {
  //     console.log('no es admin')
  //   }
  //  }, [user]);
  return (
    <div>
      {isAdmin? (
        <h1>Bienvenido admin </h1>
      ):(<></>)}
      
    </div>
  )
}

export default LoginAdmin
