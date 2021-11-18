import React, {useState, useRef} from 'react';
import {useAuth} from '../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import './pages.css';


const UpdateProfile = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser, updatePassword, updateEmail} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Las contraseñas no coinciden');
        }

        const promises = [];
        setLoading(true);
        setError('');

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises)
        .then(()=>{
            history.push('/inicio');
        })

        .catch(()=>{
            setError('Fallo al actualizar la cuenta');
        })

        .finally(()=>{
            setLoading(false);
        })

    }

    return (
        
        <div className="Padre">
        <div className="login-container">
          <div className="login-info-container">
            <h1 className="title">Actualizar contraseña</h1>
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

                <input 
                    className="input"
                    type="password"
                    required
                    ref={passwordConfirmRef}
                    placeholder="Confirmar contraseña"
                    />  

                <button  disabled={loading} type="submit" className="btnLogin">Actualizar</button>
                <p><Link to='/inicio' ><span className="span">Regresar</span></Link></p>
            </form>
          </div>
          <img className="image-container" 
                src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/login.svg?alt=media&token=5bf39ac9-acff-46b5-86f9-d192fdd048d1" 
                alt="imagenSocial" />
      </div>
      </div>
    )
}

export default UpdateProfile
