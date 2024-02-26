import { facebook, twitter, instagram, linkedin, youtube, github } from '../../assets/index'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            {/* Sección de redes sociales */}
            <nav className=" container mx-auto gap-y-3 flex flex-wrap justify-around items-center">
                <ul className='flex justify-around w-full md:w-4/12 order-2 md:order-1'>
                    <SocialLink img={facebook} txt={'https://facebook.com/'} />
                    <SocialLink img={github} txt={'https://github.com/lgramajo99'} />
                    <SocialLink img={instagram} txt={'https://instagram.com/'} />
                    <SocialLink img={linkedin} txt={'https://www.linkedin.com/in/lucianogramajo/'} />
                    <SocialLink img={youtube} txt={'https://www.youtube.com/'} />
                    <SocialLink img={twitter} txt={'https://twitter.com/'} />
                </ul>

                {/* Sección de sobre el blog */}
                <div className='w-full md:w-4/12 text-center order-1 md:order-2'>
                    <h4>Explora nuestro blog</h4>
                    <ul className='flex flex-wrap gap-x-2'>
                        <NavLink to={'/'} >Inicio</NavLink >
                        <NavLink to={'/about'} >Sobre nosotros</NavLink >
                        <NavLink to={'/directorio'} >Directorio</NavLink >
                        <NavLink to={'/'} >Otros...</NavLink >
                        <NavLink to={'/'} >Otros...</NavLink >
                        <NavLink to={'/'} >Otros...</NavLink >
                        <NavLink to={'/'} >Otros...</NavLink >
                    </ul>
                </div>
                {/* Sección de derechos de autor */}
                <section className="w-full order-3">
                    <p className="text-sm ">
                        &copy; 11/2023 | Todos los derechos reservados. Desarrollado por <span className="font-semibold">Luciano Gramajo</span>.
                    </p>
                </section>
            </nav>
        </footer>
    );
}

export default Footer;

function SocialLink({ img, txt }) {
    return (<a className='rounded-full bg-white p-2 transition-opacity duration-300 hover:opacity-75' href={txt} target="_blank" rel="noopener noreferrer">
        <img src={img} className='w-4 h-4' alt={txt} />
    </a>)
}