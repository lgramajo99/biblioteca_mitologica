import Manufactures from "./Manufactures"

function MainContent() {
    return (<section className="w-full md:w-9/12 lg:w-10/12 p-3">
        <Manufactures seccion={'Mas recientes'} />
        <Manufactures seccion={'Mas vistos'} />
    </section>)
}

export default MainContent;