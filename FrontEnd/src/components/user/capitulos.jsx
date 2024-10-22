import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Capitulos = () => {

    const [capitulos, setCapitulos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/capitulos/')
            .then(res =>
                setCapitulos(res.data)
            )
            .catch(err =>
                console.log(err));

    }, []);

    return (
        <>
            <div className="flex-grow-1">
                <section className="py-3 text-center container">
                    <div className="row py-lg-3">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Capitulos</h1>
                            <hr style={{ color: '#ff36d3', border: 'solid 1px' }} />
                            <p className="lead text-body-secondary">En este apartado podra encontrar todos los capitulos del reglamento de la fundacion universitaria konrad lorenz.</p>

                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row">
                            {capitulos.map((capitulo, index) => (
                                <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title">{capitulo.titulo}</h5>
                                            <hr />
                                            <h6 className="card-subtitle mb-2 text-body-secondary">capitulo {index + 1}</h6>
                                            <p className="card-text">{capitulo.descripcion}</p>
                                            <hr />
                                            <button type="button" className="btn btn-light">Ver artículos</button>
                                           <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Capitulos; 