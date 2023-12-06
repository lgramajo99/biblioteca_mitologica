import { useState } from "react";


function PandoraFilter() {
    const [isOpen, setOpen] = useState(false)
    const handleFilterToggle = () => { setOpen(!isOpen) };

    return (
        <div>

            <button type="button"
                className="flex items-center"
                onClick={handleFilterToggle}
                data-toggle="dropdown"
                title="None selected"
                aria-expanded="false">

                <span><b>Tipos:</b>Todos</span>
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg> //chevron-down 
                    : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15l6 -6l6 6" /></svg> //chevron-up
                }
            </button>

            {isOpen && <ul>
                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="nordico" />Nordico</label></a></li>

                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="egipcio" />Egipcio</label></a></li>

                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="maya" />Maya</label></a></li>

                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="griega" />Griega</label></a></li>

                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="japonesa" />Japonesa</label></a></li>

                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="inca" />Inca</label></a></li>

                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="celta" />Celta</label></a></li>

                <li><a tabindex="0"><label className="checkbox">
                    <input type="checkbox" value="azteca" />Azteca</label></a></li>
            </ul>
            }        </div>
    )
}

export default PandoraFilter;