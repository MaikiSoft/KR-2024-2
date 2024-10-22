import { useState, useEffect } from "react";

const Home = () => {

    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/articulos/')
            .then(res => res.json())
            .then(data => {
                setArticulos(data);
            })
            .catch(err => {
                console.log(err);
            })
    })

    return (
        <>
            <div className="flex-grow-1">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.konradlorenz.edu.co/wp-content/uploads/2024/10/2024-09-12-becas-jaab-banner2-1.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.konradlorenz.edu.co/wp-content/uploads/2024/10/Banner-especializacion-sexualidad-1920x500-1.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.konradlorenz.edu.co/wp-content/uploads/2024/10/Expectativa-web.gif" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p> */}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <hr />
                <section className="py-3 text-center container">
                    <div className="row py-lg-3">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light"><i class="bi bi-exclamation-diamond"></i>Advertencia</h1>
                            <hr style={{ color: '#ff36d3', border: 'solid 1px' }} />
                            <p className="lead text-body-secondary">Este sitio NO es una filial oficial de la Fundación Universitaria Konrad Lorenz. Ha sido creado exclusivamente por y para estudiantes, con el único propósito de informar y aprender. No nos hacemos responsables por posibles errores, mala interpretación o desinformación respecto al reglamento de esta institución.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="row">
                {articulos.map((articulos, index) => (
                <div className="col-4" key={index}>
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action" href="#list-item-1">{articulos.titulo}</a>
                </div>
            </div>
                ))}
                {articulos.map((articulos, index) => (
            <div className="col-8" key={index}>
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
                    <h4 id={`list-item-${index}`}>Item 1</h4>
                    <p>{articulos.contenido}</p>
                </div>
            </div>
                ))}

            </div>

        </>
    )
}

export default Home;