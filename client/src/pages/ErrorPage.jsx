import React from "react";

function ErrorPage() {
    const imagenCadenaRota = "https://static.xx.fbcdn.net/rsrc.php/y7/r/s_LXY1yMsCT.svg?_nc_eui2=AeEKSyXqwn2KWPBbgao-Nh62EvoiLXyhshMS-iItfKGyE_3Udp2blOEjj03XE5iWmzmOokSUPwOTQyzBJWqeiZOg.png";

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img
                src={imagenCadenaRota}
                alt="imagen de una cadena rota, referencia a que el enlace esta roto."
                className="max-w-xs mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">Esta página no está disponible</h1>
            <p className="text-gray-600 mb-4">
                Es posible que el enlace esté roto o que se haya eliminado la página. Comprueba que el enlace que quieres abrir es correcto.
            </p>
            <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Volver al inicio</button>
            <button className="bg-gray-300 text-gray-700 py-1 px-2 rounded mr-2">Volver</button>
            <button className="py-2 px-4 rounded">Ir a servicios de ayuda</button>
        </div>
    );
}

export default ErrorPage;
