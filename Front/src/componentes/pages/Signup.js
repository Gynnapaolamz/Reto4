import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import './pages.css';
import imags from '../../media/login.svg';


const Signup = () =>{

    const emailRef = useRef();
    const passwordRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
 
    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/inicio');
        } catch {
            setError('Fallo al crear la cuenta, Intentalo de nuevo');
        }
        
        setLoading(false);
    }

    return ( 
        <div className="Padre">
        <div className="login-container">
          <div className="login-info-container">
            <h1 className="title">Registrate</h1>
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
                <input 
                    className="input"
                    type="password"
                    required
                    ref={passwordRef}
                    placeholder="Contraseña"
                    />
                <button  disabled={loading} type="submit" className="btnLogin">Registrate</button>
                <p>Ya tienes cuenta?<Link to='/login' ><span className="span">Iniciar sesión</span></Link></p>
            </form>
          </div>
          <img className="image-container" 
                src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/login.svg?alt=media&token=5bf39ac9-acff-46b5-86f9-d192fdd048d1" 
                alt="imagenSocial" />
      </div>
      </div>
    )
}

export default Signup
