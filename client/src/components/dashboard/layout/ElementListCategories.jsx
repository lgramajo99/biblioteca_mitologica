import { expandWindowSolid, pencilSolid, recycleSolid } from "../../../assets";
import ButtonIcon from "./ButtonIcon";

function ElementListCategories({ data }) {
    const { name, count_post } = data

    return (
        <li className="flex w-full h-20 min-h-20 justify-between px-3 items-center border border-darkSecondary dark:bg-darkPrimary rounded-lg shadow-md shadow-darkSecondary">
            <section className="w-8/12">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm">Cantidad de posts: {count_post}</p>
            </section>
            
            <section className="text-end w-4/12">
                <ButtonIcon icon={pencilSolid} />
                <ButtonIcon icon={recycleSolid} />
                <ButtonIcon icon={expandWindowSolid} />
            </section>
        </li>
    );
}

export default ElementListCategories;
