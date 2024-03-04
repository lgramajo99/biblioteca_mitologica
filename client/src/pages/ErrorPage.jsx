import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { default as image404 } from "../assets/image/404_page_cover.png";

function ErrorPage() {
    const navigate = useNavigate();
    const handleGoBack = () => { navigate(-1) }

    return (
        <main className="flex flex-col h-screen py-3 justify-center items-center">
            <img src={image404}
                alt='imagen de pinguino pescando "not found", referencia a que el enlace esta roto o no existe.'
                className="w-6/12" />
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, esta página no está disponible</p>
            <br />
            <ul className="flex flex-col gap-1 text-center">
                <NavLink
                    className={'block border-2 border-darkSecondary rounded-lg p-2 font-bold transition duration-300 ease-in-out hover:bg-darkSecondary'}
                    to={'/'}
                    aria-label="Volver al inicio"
                    title="Volver al inicio">
                    Volver al inicio
                </NavLink>

                <button type="button"
                    onClick={handleGoBack}
                    className={'block border-2 border-darkSecondary rounded-lg p-2 font-bold transition duration-300 ease-in-out hover:bg-darkSecondary'}
                    aria-label="Volver atrás"
                    title="Volver atrás">
                    Volver atrás
                </button>

                <NavLink
                    className={'block border-2 border-darkSecondary rounded-lg p-2 font-bold transition duration-300 ease-in-out hover:bg-darkSecondary'}
                    to={'/ayuda'}
                    aria-label="Ir a servicios de ayuda"
                    title="Ir a servicios de ayuda">
                    Ir a servicios de ayuda
                </NavLink>
            </ul>
        </main>
    );
}

export default ErrorPage;
