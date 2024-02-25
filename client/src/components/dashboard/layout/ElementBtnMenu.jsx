import { useSelector } from 'react-redux';
import { pen } from '../../../assets/index';
import { useNavigate, NavLink } from 'react-router-dom';

function ElementBtnMenu({ image = pen, alt, txt, to }) {
    const { displayedMenu, themeChangeMode } = useSelector(state => state.admin)
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate(`/administracion/${to}`);
    };


    return (
        <li>
            <NavLink
                to={`/administracion/${to}`}
                title={txt}
                className={`flex items-center w-full rounded-xl p-1 gap-2 transition duration-300 ease-in-out focus:font-bold focus:outline-none hover:font-bold hover:bg-purple-200 focus:bg-purple-200 dark:text-darkAcenture dark:hover:bg-darkSecondary dark:focus:bg-darkSecondary ${displayedMenu ? 'justify-start' : 'justify-center'}`}>

                <img src={image} alt={alt} className={`${themeChangeMode ? 'filter invert' : ''}`} />
                <span className={`${displayedMenu ? "truncate" : "hidden"}`}>{txt}</span>
            </NavLink>
        </li>
    )
}

export default ElementBtnMenu;
