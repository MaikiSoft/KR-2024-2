import React, {useState, useEffect} from "react";{}

const Articulos = () =>{

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

    return(
        <>
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

export default Articulos;