import React,{useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./Encabezado.css";
import {useAuth} from '../context/AuthContext';

const Botones = () => {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();

    async function handleLogout(){
      setError('');
      try { 
          await logout();
          history.push('/login');
      } catch{
          setError('Fallo al cerrar sesión');
      }
    }

    return (
        <>
        <button className="navbar-brand disabled botonReserva"><Link to='/update-profile' className="botonPerfil">
        <img
                      src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Iconologin.png?alt=media&token=479840ae-a863-4a08-808d-a855494fcf5d"
                      width="40" height="40"
                      />    
        </Link></button>
        <button onClick={handleLogout} className="navbar-brand disabled botonReserva">
        <img
                      src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Cerra.png?alt=media&token=62e6ed55-82a8-4b21-a0fb-01f3f33e6ec4"
                      width="40" height="40"
                      />       
            
        </button> 
        </>
    )
  }

  export default Botones;