import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import './pages.css';

const ForgotPassword = () =>{

    const emailRef = useRef();
    const {resetPassword} = useAuth(); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        try {

            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Revisa tu bandeja de entrada, en el email que proporcionaste');

        } catch {
            setError('Fallo al recuperar tu contraseña');
        }

        setLoading(false);
    }
    return (
        
        <div className="Padre">
        <div className="login-container">
          <div className="login-info-container">
            <h1 className="title">Restaurar contraseña</h1>
            {error && <h1 className="title">{error}</h1>}
            <form onSubmit= {handleSubmit} className="inputs-container">
                <input 
                    className="input"
                    type="email"
                    autoFocus
                    required
                    ref={emailRef}
                    placeholder="Nombre de usuario"
                    />
            
                <button  disabled={loading} type="submit" className="btnLogin">Restaurar contraseña</button>
                <p><Link to='/login' ><span className="span">Regresar</span></Link></p>
            </form>
          </div>
          <img className="image-container" 
                src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/login.svg?alt=media&token=5bf39ac9-acff-46b5-86f9-d192fdd048d1" 
                alt="imagenSocial" />
      </div>
      </div>
       
    )
}

export default ForgotPassword
