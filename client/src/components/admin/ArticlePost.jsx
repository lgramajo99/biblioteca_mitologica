import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa los estilos predeterminados

function ArticlePost() {
    const initialValues = {
        text: '',
        mitology: '',
    };

    const [formData, setFormData] = useState({ ...initialValues });

    const handleChange = (value) => {
        setFormData({
            ...formData,
            text: value,
        });
    };

    const handleSelectChange = (event) => {
        setFormData({
            ...formData,
            mitology: event.target.value,
        });
    };

    const handleSubmit = () => {
        console.log('Contenido enviado:', formData);
        setFormData({ ...initialValues });
    };

    return (
        <div>
            <h1>Editor de Mitologías</h1>

            <div className="h-screen">

                <select name="mitology" value={formData.mitology} onChange={handleSelectChange}>
                    <option value="">Selecciona...</option>
                    <option value="option1">Opcion 1</option>
                    <option value="option2">Opcion 2</option>
                    <option value="option3">Opcion 3</option>
                </select>

                <ReactQuill value={formData.text} onChange={handleChange} />

                <button onClick={handleSubmit} className="font-bold p-2 rounded">
                    Enviar Contenido
                </button>
            </div>
        </div>
    );
};

export default ArticlePost;
