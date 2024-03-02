import { expandWindowSolid, pencilSolid, recycleSolid } from '../../../assets/index'
import ButtonIcon from './ButtonIcon';

function ElementListPosts({ data }) {
    const { id, titulo, imagenes } = data;


    return (
        <section key={id} className="flex w-12/12 h-20 min-h-20 justify-between px-3 items-center rounded-lg shadow-md border border-darkSecondary dark:bg-darkPrimary shadow-darkSecondary">
            <article className="relative w-2/12 h-full overflow-hidden">
                <img src={imagenes?.imagen} alt={imagenes?.alt}
                    className="object-cover object-center w-full h-full rounded" />
            </article>
            <h3 className="w-6/12 md:w-8/12 px-2 line-clamp-2">{titulo}</h3>
            <article className="w-5/12 md:w-3/12 text-end">
                <ButtonIcon icon={expandWindowSolid} to={id} target={'Abrir'} />
                <ButtonIcon icon={pencilSolid} target={'Editar'} />
                <ButtonIcon icon={recycleSolid} target={'Eliminar'} />
            </article>
        </section>
    );
}

export default ElementListPosts;