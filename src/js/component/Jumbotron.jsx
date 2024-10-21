import React from "react";

const Jumbotron = () => {
    return (
        <div className="card mt-2 mb-3 mx-auto col-12 col-md-11" style={{ background: "rgb(173, 216, 230)" }}>
            <div className="card-body">
                <h2 className="card-title mb-3" style={{ fontSize: "2.5rem", marginTop: "25px" }}>A Warm Welcome!</h2>
                <p className="card-text mb-4">Hello everyone! I’m excited to present my first project in React, developed during my time as a student at 4Geeks Academy. This journey has been an incredible opportunity for me to learn and apply new skills in web development. I am proud of the result and the knowledge I’ve gained along the way. If you're interested in exploring more projects I've created and following my growth in the development world, feel free to visit my GitHub account. There, you’ll find a variety of work that reflects my skills and progress as a developer. Just click the button below to access it. Thank you for your support!</p>
                <div className="d-flex">
                    <a href="https://github.com/MeliodasCRM" className="btn btn-primary mb-5 ms-2">Go to My Github Acc!</a>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
