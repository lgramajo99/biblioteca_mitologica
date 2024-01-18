import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAdminActions } from "../../redux/actions/adminAction";
import { useAuthActions } from "../../redux/actions/authAction";


function Login() {
    const isOpenLogin = useSelector(state => state.admin.openLogin)
    const { handleOpenLoginClick } = useAdminActions();
    const { login } = useAuthActions();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });


    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = await login({
            email: formData.email,
            password: formData.password,
        });

        if (user) {
            console.log("Inicio de sesión exitoso.")
            handleOpenLoginClick()
            setFormData({
                email: '',
                password: '',
                remember: false,
            });

        } else {
            console.log('Credenciales incorrectas')
        }
    }

    return (
        <div className={`fixed inset-0 ${isOpenLogin ? 'hidden' : ''}`}>
            <div className="flex items-center justify-center h-screen bg-black bg-opacity-50">
                <div className="m-1 max-w-md p-6 bg-white rounded-md shadow-md z-50">

                    <svg width="80px"
                        height="80px"
                        viewBox="0 0 1024 1024"
                        className="icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42" />
                        <path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42" />
                        <path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42" />
                        <path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2F4BFF" />
                    </svg>

                    <h3 className="mb-4">Inicio de sesión Biblioteca Mitologica.</h3>

                    <form
                        className="d-flex flex-col"
                        onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label
                                className="block text-left text-gray-700 text-sm font-bold"
                                htmlFor="email">
                                Correo electrónico *
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Example: example@email.com"
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-left text-gray-700 text-sm font-bold"
                                htmlFor="password">
                                Contraseña *
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="**********"
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4 flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="remember"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleInputChange} />

                            <label
                                className="text-sm text-gray-700"
                                htmlFor="remember">
                                Recordarme
                            </label>
                        </div>
                        <div className="flex justify-end gap-x-2">
                            <button
                                className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 focus:outline-none"
                                type="button"
                                onClick={handleOpenLoginClick}>
                                Cerrar
                            </button>

                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                type="submit">
                                Iniciar sesión
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        </div>

    )
}

export default Login;