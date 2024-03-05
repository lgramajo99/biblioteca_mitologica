import { useAuth0 } from "@auth0/auth0-react";
import { default as welcome } from '../../../assets/image/welcome.png'

function Welcome() {
    const { user } = useAuth0

    return (<section className="h-screen text-center py-3 ">
        <h2>¡Bienvenido{user && user.name ? `, ${user.name}!` : '!'}</h2>
        <img src={welcome} alt="Bienvenido usuario" className="w-auto mx-auto" />
        <p className="text-lg">Gracias por acceder al panel de administración.</p>
    </section>
    )
}

export default Welcome;