import React, { useState } from "react";

function Checkbox({ value, id, name, label }) {
    return (
        <li>
            <a tabIndex="0">
                <input type="checkbox" value={value} id={id} name={name} />
                <label className="checkbox" htmlFor={id}>
                    {label}
                </label>
            </a>
        </li>
    );
}

function PandoraFilter() {
    const [isOpen, setOpen] = useState(false);

    const handleFilterToggle = () => {
        setOpen(!isOpen);
    };

    const checkboxes = [
        { value: "nordico", id: "NordicoCheckbox", label: "Nordico" },
        { value: "egipcio", id: "EgipcioCheckbox", label: "Egipcio" },
        { value: "maya", id: "MayaCheckbox", label: "Maya" },
        { value: "griega", id: "GriegaCheckbox", label: "Griega" },
        { value: "japonesa", id: "JaponesaCheckbox", label: "Japonesa" },
        { value: "inca", id: "IncaCheckbox", label: "Inca" },
        { value: "celta", id: "CeltaCheckbox", label: "Celta" },
        { value: "azteca", id: "AztecaCheckbox", label: "Azteca" },
    ];

    return (
        <div>
            <button
                type="button"
                className="flex items-center"
                onClick={handleFilterToggle}
                data-toggle="dropdown"
                title="None selected"
                aria-expanded={isOpen}
                id="tiposButton"
            >
                <span>
                    <b>Tipos:</b>Todos
                </span>
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 9l6 6l6 -6" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-up"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 15l6 -6l6 6" />
                    </svg>
                )}
            </button>

            {isOpen && (
                <ul>
                    {checkboxes.map((checkbox) => (
                        <Checkbox key={checkbox.id} {...checkbox} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PandoraFilter;
