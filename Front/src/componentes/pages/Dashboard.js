import React, {useState} from 'react';
import {useAuth} from '../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const Dashboard = () => {

    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();

    async function handleLogout(){
        setError('');

        try { 
            await logout();
            history.push('/')
        } catch{
            setError('Fallo al cerrar sesión')
        }
    }

    return (
        <div className="hero">
            <nav>
                <h2>Bienvenido {currentUser.email}</h2>
                <div className="menu">
                    <button><Link to='/update-profile'>Perfil</Link></button>
                    <button onClick={handleLogout}>Salir</button>
                </div>
            </nav>
        </div>
    )
}

export default Dashboard
