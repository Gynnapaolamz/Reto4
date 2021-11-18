import React, {useState} from 'react';
import {app} from './configFirebaseSS';
import { useFirebaseApp } from 'reactfire';



export default  (props) => {
    
    //const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();

    const submit = async () => {
     
        await app.auth().createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div>
                <label htmlFor="email">Correo elctrónico</label>
                <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
                <label htmlFor="password" >Contraseña</label>
                <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)}/>
                <button onClick={submit}>Iniciar sesión</button>
            </div>
        </div>
    )
}


