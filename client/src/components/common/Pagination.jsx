import { useState } from "react";

function Pagination() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 20;


    const renderPages = () => {
        const pages = [];
        const pageNeighbours = 1;
        const styleBtn = `w-12 py-1 border border-darkSecondary rounded-md transition duration-300 ease-in-out text-darkTxt`

        pages.push(
            <button key={'<<'}
                className={`${styleBtn} ${currentPage === 1 ? 'pointer-events-none bg-darkAcenture' : ' hover:bg-darkSecondary focus:bg-darkSecondary'}`}
                type="button"
                disabled={currentPage === 1}
                onClick={() => handleChangePage(currentPage - 1)}>
                {'<<'}
            </button>
        )

        pages.push(
            <button className={`${styleBtn} ${currentPage === 1 ? 'pointer-events-none bg-darkAcenture' : ' hover:bg-darkSecondary focus:bg-darkSecondary'}`}
                key="1"
                onClick={() => handleChangePage(1)}
                disabled={currentPage === 1}>
                1
            </button>
        );

        for (let page = Math.max(2, currentPage - pageNeighbours); page <= Math.min(totalPages - 1, currentPage + pageNeighbours); page++) {
            pages.push(
                <button className={`${styleBtn} ${currentPage === page ? 'pointer-events-none bg-darkAcenture' : 'hover:bg-darkSecondary focus:bg-darkSecondary'}`}
                    key={page}
                    disabled={currentPage === page}
                    onClick={() => handleChangePage(page)}>
                    {page}
                </button>
            );
        }

        pages.push(
            <button className={`${styleBtn} ${currentPage === totalPages ? 'pointer-events-none bg-darkAcenture' : ' hover:bg-darkSecondary focus:bg-darkSecondary'}`}
                key={totalPages}
                onClick={() => handleChangePage(totalPages)}
                disabled={currentPage === totalPages}
            >
                {totalPages}
            </button>
        );

        pages.push(
            <button
                className={`${styleBtn} ${currentPage === totalPages ? 'pointer-events-none bg-darkAcenture' : ' hover:bg-darkSecondary focus:bg-darkSecondary'}`}
                key=">>"
                onClick={() => handleChangePage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {'>>'}
            </button>
        );

        return pages;
    }

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <ul className='flex justify-center bg-transparent font-bold gap-1'>
            {renderPages()}
        </ul>
    )
}

export default Pagination;