function PandoraFilter() {
    return (
        <div>

            <button type="button" className="multiselect dropdown-toggle btn btn-sm btn-default" data-toggle="dropdown" title="None selected" aria-expanded="false">
                <span className="multiselect-selected-text">
                    <b>Tipos:</b>Todos</span><b className="caret"></b>
            </button>

            <ul className="multiselect-container genres-select dropdown-menu">

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
        </div>
    )
}

export default PandoraFilter;