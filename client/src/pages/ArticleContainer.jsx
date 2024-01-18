function ArticleContainer() {

    const imagenPrueba = {
        imagen: 'https://ih0.redbubble.net/image.1756098780.0530/raf,360x360,075,t,fafafa:ca443f4786.jpg',
        alt: 'Imagen rota'
    }

    return (
        <article className=" bg-slate-100 container m-auto py-10">
            <h2 className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <h3 className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde possimus dolores consectetur ad aspernatur exercitationem.</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est vero error officia! Quo a, quis error dolorem exercitationem aliquam est saepe quisquam veritatis praesentium vero quibusdam, sint aspernatur esse temporibus molestiae, consequuntur sapiente rem perferendis obcaecati sit architecto. Atque ipsum at deserunt! Eaque porro, perferendis exercitationem eius vel mollitia?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ab? Architecto molestiae iure itaque suscipit expedita officiis, quas facilis eum laudantium quod? Minus, maiores temporibus odio atque quam, enim quis ipsa incidunt doloribus neque unde veniam, repudiandae officia corrupti esse est tenetur pariatur? Ad, provident.</p>

            <img src={imagenPrueba.imagen} alt={imagenPrueba.alt} />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi accusamus minus natus est ut, excepturi ducimus totam sed corrupti culpa, voluptates facere tempora optio!</p>
        </article>
    )
}

export default ArticleContainer;