import React, { useState, useEffect } from "react"; { }
import { useDash } from '../../context/dashContext';

const Articulos = () => {

    const [articulos, setArticulos] = useState([]);

    const { capId } = useDash();

    if (capId == null) {
        useEffect(() => {
            fetch('http://localhost:3001/articulos/')
                .then(res => res.json())
                .then(data => {
                    setArticulos(data);
                })
                .catch(err => {
                    console.log(err);
                })
        });
    } else {
        useEffect(() => {
            fetch(`http://localhost:3001/articulos/${capId}`)
                .then(res => res.json())
                .then(data => {
                    setArticulos(data);
                })
                .catch(err => {
                    console.log(err);
                })
        });
    }

    return (
        <div className="flex-grow-1">
            <section className="py-3 text-center container">
                <div className="row py-lg-3">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Articulos</h1>
                        <hr style={{ color: '#ff36d3', border: 'solid 1px' }} />
                        <p className="lead text-body-secondary">En este apartado podra observar {capId == null ? 'Todos los articulos que se encuentran en el reglamento de la Fundacion Universitaria Konrad Lorenz.' : `todos los articulos que contiene el capitulo numero ${capId} del reglamento universitario de la Konrad Lorenz.`}</p>

                    </div>
                </div>
            </section>
            <div className="accordion d-flex justify-content-center" id="accordionExample">
                <div className="accordion-item m-5" style={{ width: '100vh' }}>
                    {articulos.map((articulo, index) => (
                        <>
                            <h2 className="accordion-header border-bottom border-1 border-grey" key={index}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                                    {articulo.titulo}
                                </button>
                            </h2>
                            <div id={"collapse" + index} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>{articulo.contenido}</strong>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default Articulos;
