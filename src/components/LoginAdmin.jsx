import React from 'react'
import { useSelector } from 'react-redux';

const LoginAdmin = () => {
  const user = useSelector((store) => store.userStore);

  // useEffect(() => {
    if (user.admin === true) {
      console.log('es administrador')
    } else {
      console.log('no es admin')
    }
  // }, [user]);
  return (
    <div>
      <h1>Bienvenido admin </h1>
    </div>
  )
}

export default LoginAdmin
