import { useState } from "react";


function PandoraFilter() {
    const [isOpen, setOpen] = useState(false)
    const handleFilterToggle = () => { setOpen(!isOpen) };

    return (
        <div>

            <button type="button" onClick={handleFilterToggle} data-toggle="dropdown" title="None selected" aria-expanded="false">
                <span><b>Tipos:</b>Todos</span>
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