import { useNavigate } from 'react-router-dom'

function ButtonIcon({ icon, to, target }) {
    const navigate = useNavigate();

    const goTo = () => {
        if (to) { navigate(`/articulo/${to}`); }
        else { console.log('Este es un mensaje de los botones') }
    };

    return (
        <button type="button"
            className="px-1 transition transform hover:scale-110 focus:outline-none filter dark:invert"
            tabIndex="0"
            aria-label={target}
            title={target}
            onClick={goTo}>
            <img src={icon} className='w-6 h-6' alt={icon.toString()} />
        </button >
    );
}

export default ButtonIcon;