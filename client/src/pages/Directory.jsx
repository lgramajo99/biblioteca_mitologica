import Card from "../components/Card";

function Directory() {
    const arrCards = Array.from({ length: 18 }, (_, index) => <Card key={index} />);

    return (
        <div className="container mx-auto text-center">
            <h1 className="">Directorio de Biblioteca Mitologica.</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
                {arrCards}
            </section>
        </div>
    );
}

export default Directory;
