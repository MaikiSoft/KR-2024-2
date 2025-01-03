import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDash } from '../../context/dashContext';
import { Token } from '../../services/token';

const Capitulos = () => {
    const YTKEY = 'AIzaSyAdRZMAsJHz2KPzYbCr6QCDQI8-zAObpVU'; // Asegúrate de reemplazar esto con tu clave real

    const obtenerVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const { setMenuOption, userInfo } = useDash();
    const { setCapId } = useDash(null);

    const [capitulos, setCapitulos] = useState([]);
    const [descripcionVideo, setDescripcionVideo] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/capitulos/')
            .then((res) => setCapitulos(res.data))
            .catch((err) => console.log(err));
    }, []);

    const capXArt = (index) => {
        setMenuOption('Articulos');
        setCapId(index + 1);
    };

    const logeado = () => Token();

    useEffect(() => {
    logeado();
    }, []);
    const btnAddCap = () => {
        try {
            if(userInfo.isAdmin == 1){
                return <button className='btn btn-success mb-5'><i class="bi bi-folder-plus"></i> Agregar cap</button>
            }
            } catch (error) {
            return null;
        }
    }

    useEffect(() => {
    const obtenerDescripcion = async (url) => {
        const videoId = obtenerVideoId(url);
        try {
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YTKEY}&part=snippet`
            );
            const data = await res.json();
            if (data.items && data.items.length > 0) {
                setDescripcionVideo(data.items[0].snippet.description);
            } else {
                setDescripcionVideo('No se encontró información para este video.');
            }
        } catch (error) {
            setDescripcionVideo('Error al obtener la descripción del video.');
        }
    };
    obtenerDescripcion('https://www.youtube.com/embed/BUwFAYFrQ1c?si=QNHJDFHnlwae4eEm');
}, []);

    return (
        <>
            <div className="flex-grow-1">
                <section className="py-3 text-center container">
                    <div className="row py-lg-3">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Capitulos</h1>
                            <hr style={{ color: '#ff36d3', border: 'solid 1px' }} />
                            <p className="lead text-body-secondary">
                                En este apartado podra encontrar todos los capitulos del reglamento de la fundacion universitaria konrad lorenz.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        {btnAddCap()}
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
                                            <button
                                                type="button"
                                                className="btn btn-light"
                                                onClick={() => capXArt(index)}
                                            >
                                                Ver artículos
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target={`#exampleModal${index}`}
                                                onClick={() =>
                                                    obtenerDescripcion(
                                                        'https://www.youtube.com/embed/BUwFAYFrQ1c?si=QNHJDFHnlwae4eEm'
                                                    )
                                                }
                                            >
                                                Ejemplo
                                            </button>

                                            <div
                                                className="modal fade"
                                                id={`exampleModal${index}`}
                                                tabIndex="-1"
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content" style={{ width: '60vh' }}>
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                {capitulo.titulo}
                                                            </h1>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>
                                                        <div className="modal-body col" style={{ margin: 'auto' }}>
                                                            <iframe
                                                                className='mb-3'
                                                                margin="auto"
                                                                width="560"
                                                                height="315"
                                                                displey="block"
                                                                src="https://www.youtube.com/embed/BUwFAYFrQ1c?si=QNHJDFHnlwae4eEm"
                                                                title="YouTube video player"
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                allowFullScreen
                                                            ></iframe>
                                                            <p>
                                                                <strong>Descripción:</strong> {descripcionVideo || 'Cargando...'}
                                                            </p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            {logeado() && (
                                                                <button type="button" className="btn btn-primary">
                                                                    Encuesta
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Capitulos;
