import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


function ErrorPage() {
    const imagenCadenaRota = "https://static.xx.fbcdn.net/rsrc.php/y7/r/s_LXY1yMsCT.svg?_nc_eui2=AeEKSyXqwn2KWPBbgao-Nh62EvoiLXyhshMS-iItfKGyE_3Udp2blOEjj03XE5iWmzmOokSUPwOTQyzBJWqeiZOg.png";
    const navigate = useNavigate();
    const handleGoBack = () => { navigate(-1) }

    return (
        <main className="flex flex-col items-center justify-center h-screen gap-y-2">
            <img src={imagenCadenaRota}
                alt="imagen de una cadena rota, referencia a que el enlace esta roto."
                className="max-w-xs" />

            <h2 className="text-3xl font-bold">Esta página no está disponible</h2>

            <p className="text-gray-600">
                Es posible que el enlace esté roto o que se haya eliminado la página. Comprueba que el enlace que quieres abrir es correcto.
            </p>

            <ul className="flex flex-col text-center gap-y-2">
                <li>
                    <NavLink
                        className={'bg-blue-500 text-gray-950 py-1 px-3 rounded font-bold transition duration-300 ease-in-out hover:bg-blue-600'}
                        to={'/'}
                        aria-label="Volver al inicio"
                        title="Volver al inicio">Volver al inicio</NavLink>
                </li>
                <li>
                    <button type="button"
                        onClick={handleGoBack}
                        className={'bg-gray-300 text-gray-700 py-1 px-3 rounded font-bold transition duration-300 ease-in-out hover:bg-gray-400 hover:text-gray-800'}
                        aria-label="Volver atrás"
                        title="Volver atrás">Volver atrás</button>
                </li>
                <li>
                    <NavLink
                        className={'bg-gray-300 text-gray-700 py-1 px-3 rounded font-bold transition duration-300 ease-in-out hover:bg-gray-400 hover:text-gray-800'}
                        to={'/ayuda'}
                        aria-label="Ir a servicios de ayuda"
                        title="Ir a servicios de ayuda">Ir a servicios de ayuda</NavLink>
                </li>
            </ul>
        </main>
    );
}

export default ErrorPage;
