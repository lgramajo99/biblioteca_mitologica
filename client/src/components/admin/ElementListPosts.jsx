import penSquare from '../../assets/svg/penSquare.svg'
import trash from '../../assets/svg/trash.svg'
import arrowSquare from '../../assets/svg/arrowSquare.svg'
import { Link } from 'react-router-dom'


function ElementListPosts({ data }) {
    const { id, titulo, imagenes } = data;
    const res = titulo.replace(/[^a-zA-Z0-9]/g, '-');
    const resUrl = res.replace(/-+$/, '');


    return (
        <div className="m-auto py-2" key={id}>
            <div className="flex w-12/12 bg-slate-200 shadow-lg white rounded-lg shadow-black h-20 min-h-20 justify-end items-center">

                {/* ---------------------------- */}
                <div className="relative w-2/12 h-full overflow-hidden">
                    <img src={imagenes?.imagen}
                        alt={imagenes?.alt}
                        className="object-cover object-center w-full h-full rounded"
                    />
                </div>

                {/* ---------------------------- */}
                <h3 className="w-6/12 md:w-8/12 px-2 line-clamp-2">{titulo}</h3>

                {/* ---------------------------- */}
                <div className="w-5/12 md:w-3/12 text-end">

                    <button className="px-1 transition transform hover:scale-110 focus:outline-none"
                        type="button" >
                        <Link to={resUrl}>
                            <img src={arrowSquare} alt="arrowSquare" />
                        </Link>
                    </button>

                    <button className="px-1 transition transform hover:scale-110 focus:outline-none"
                        type="button" >
                        <img src={penSquare} alt="pen" />
                    </button>

                    <button className="px-1 transition transform hover:scale-110 focus:outline-none"
                        type="button" >
                        <img src={trash} alt="trash" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ElementListPosts;