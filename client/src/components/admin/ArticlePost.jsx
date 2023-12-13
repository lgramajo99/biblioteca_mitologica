import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa los estilos predeterminados

function ArticlePost() {
    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
    };

    return (
        <div>
            <h1>Editor de Mitologías</h1>
            <div className="h-screen">
                <ReactQuill value={content} onChange={handleChange} />
            </div>
        </div>
    );
};

export default ArticlePost;
