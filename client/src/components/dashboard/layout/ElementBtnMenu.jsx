import { useSelector } from 'react-redux';
import { pen } from '../../../assets/index';
import { useNavigate } from 'react-router-dom';

function ElementBtnMenu({ image = pen, alt, txt, to }) {
    const { displayedMenu, themeChangeMode } = useSelector(state => state.admin)
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate(`/administracion/${to}`);
    };

    return (
        <li>
            <button
                type="button"
                title={txt}
                onClick={handleRedirect}
                className="flex px-2 py-1 items-center text-start w-full transition duration-300 ease-in-out hover:bg-darkPurple focus:bg-darkPurple focus:outline-none"
            >
                <img src={image} alt={alt} className={themeChangeMode && 'filter invert'} />
                <span className={displayedMenu ? "font-bold truncate" : "hidden"}>{txt}</span>
            </button>
        </li>
    )
}

export default ElementBtnMenu;
