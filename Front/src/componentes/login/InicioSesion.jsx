import React, { useEffect } from "react";
import { app } from "./configFirebaseSS";
import Home from "./Home";
import Logueo from "./Logueo";


const InicioSesion = () => {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

    return (
        <div>
            return <>{usuario ? <Home /> : <Logueo setUsuario={setUsuario} />}</>;
        </div>
    )
}

export default InicioSesion