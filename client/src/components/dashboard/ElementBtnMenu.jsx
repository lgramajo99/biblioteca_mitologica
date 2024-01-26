import { useSelector } from 'react-redux';
import pen from "../../assets/svg/pen.svg"
import { useParams} from "react-router-dom"

function ElementBtnMenu({ image = pen, alt, txt }) {
    const displayedMenu = useSelector(state => state.admin.displayedMenu)
    // const history = useHistory();

    let txtModified = txt.replace(/\bde\b\s*/g, "");
    const gonna = txtModified.replace(/ /g, "-");

    const handleClick = () => {
        // history.push(`/administracion/${gonna}`);
    };

    return (
        <li>
            <button type="button"
                title={txt}
                onClick={handleClick}
                className="flex px-2 py-1 items-center text-start w-full transition-colors duration-500 ease-in-out hover:bg-gray-600 focus:outline-none">
                <img src={image} alt={alt} />
                {displayedMenu && <span className="font-bold truncate">{txt}</span>}
            </button>
        </li>
    )
}

export default ElementBtnMenu;