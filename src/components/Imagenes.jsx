import React from "react";
import cilindro from "../imagenes/cilindro.jpg";
import muestra from "../imagenes/muestraHome.jpg";
import iconoBlack from "../imagenes/icono_black.jpg";
import clasica5 from "../imagenes//clasica5.jpg";
import iconoYellow from "../imagenes/icono_yellow.jpg";
import iconoVarios from "../imagenes/iconos_varios.jpg";
import fondo from "../imagenes/fondo.jpg";

const Imagenes = () => {
    return ( 
       <>
            <div className="container-fluid d-flex mt-3 justify-content-center align-items-center fotos col-12 col-md-12 overflow-hidden">
                <img src={cilindro} alt=""/>
                <img src={muestra} alt=""/>
                <img src={iconoBlack} alt=""/>
                <img src={clasica5} alt=""/>
                <img src={iconoYellow} alt=""/>
                <img src={iconoVarios} alt=""/>
                <img src={fondo} alt=""/>
		    </div>
        </>
    );
}
 
export default Imagenes;