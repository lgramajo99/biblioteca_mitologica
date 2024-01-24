import { useState } from "react";
import pen from "../../assets/svg/pen.svg"

function ElementBtnMenu({ image = pen, alt, txt }) {
    const [displayed, setDisplayed] = useState(false);

    return (
        <li className="rounded-md">
            <button type="button"
                className="flex items-center py-1 px-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 focus:outline-none">
                <img src={image} alt={alt} />
                {displayed && <span>{txt}</span>}
            </button>
        </li>
    )
}

export default ElementBtnMenu;