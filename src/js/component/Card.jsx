import React from "react";

const Card = ({titulo, urlFoto, texto, textoBoton, urlBoton}) => {
    return (
        <div className="card col-12 col-sm-5 col-lg-3 mt-4 mb-3 mx-auto" style={{ width: "325px", height: "500px" }}>
            <img src={urlFoto} className="card-img-top mt-3" style={{height:"200px"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{titulo}</h5>
                <p className="card-text text-center">{texto}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center">
                    <a href={urlBoton} className="btn btn-primary">{textoBoton}</a>
                </li>
            </ul>
        </div>
    )
}

export default Card;
