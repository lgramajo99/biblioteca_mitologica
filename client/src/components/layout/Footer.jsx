function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 my-1">
            <div className="container mx-auto flex flex-wrap justify-around items-center">
                {/* Sección de redes sociales */}
                <section>
                    <p className="mb-2">Sección de redes sociales.</p>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer">💧</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">🔥</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">❄</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">⚡</a>
                    </div>
                </section>

                {/* Sección de sobre el blog */}
                <section>
                    <p className="mb-2">Sección de sobre el blog.</p>
                    <ul className='flex space-x-4'>
                        <li>Inicio</li>
                        <li>Sobre nosotros</li>
                        <li>Directorio</li>
                        <li>Mas...</li>
                        <li>Mas...</li>
                    </ul>
                </section>

                {/* Sección de derechos de autor */}
                <section className="w-full">
                    <p>&copy; 11/2023 | Autor: Luciano Gramajo</p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
