import { useSelector } from 'react-redux';
import { pen } from '../../../assets/index';
import { NavLink } from 'react-router-dom';

function ElementBtnMenu({ image = pen, alt, txt, to }) {
    const { displayedMenu } = useSelector(state => state.admin)

    return (
        <NavLink
            to={`/administracion/${to}`}
            title={txt}
            className={`flex items-center w-full rounded-xl p-1 gap-2 transition duration-300 ease-in-out focus:font-bold focus:outline-none hover:font-bold hover:bg-purple-200 focus:bg-purple-200 dark:text-darkAcenture dark:hover:bg-darkSecondary dark:focus:bg-darkSecondary ${displayedMenu ? 'justify-start' : 'justify-center'}`}>

            <img src={image} alt={alt} className={`filter dark:invert`} />
            <span className={`${displayedMenu ? "truncate" : "hidden"}`}>{txt}</span>
        </NavLink>
    )
}

export default ElementBtnMenu;
