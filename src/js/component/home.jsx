import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Copyright from "./Copyright";

//create your first component
const Home = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <Jumbotron />
            <div className="container-fluid">
                <div className="row">
                    <Card urlFoto="https://www.inboundcycle.com/hubfs/0-media/blog/iStock-458085847%20(1).jpg" titulo="Google" texto="Google is one of the most influential companies in the world, known for its search engine, advertising services, Android, YouTube, and cloud computing, revolutionizing how we interact with digital information." textoBoton="Go to Google" urlBoton={"https://www.Google.com"}/>
                    <Card urlFoto="https://d1ih8jugeo2m5m.cloudfront.net/2024/08/perfil-de-facebook-1200x685.jpg" titulo={"Facebook"} texto={"Facebook is a social network created in 2004 that connects people around the world. It allows users to share content, create groups, events, and strengthen relationships, becoming an essential communication platform."} textoBoton="Go to Facebook" urlBoton={"https://www.facebook.com/?locale=es_ES"}/>
                    <Card urlFoto={"https://blog.influence4you.com/wp-content/uploads/2021/09/collabstr-0Vk7HEjWLDE-unsplash-scaled.jpg"} titulo={"Tiktok"} texto={"TikTok is a social media platform launched in 2016, famous for its short and creative videos. It allows users to share music, dance, and viral trends, transforming digital entertainment."} textoBoton={"Go to TikTok"} urlBoton={"https://www.tiktok.com"} />
                    <Card urlFoto={"https://transvision.es/wp-content/uploads/2024/04/historia-instagram-tamano.jpg"} titulo={"Instagram"} texto={"Instagram, launched in 2010, is a popular social media platform focused on sharing photos and videos. Users can edit content, follow accounts, explore trends, and connect with friends and brands."} textoBoton={"Go to Instagram"} urlBoton={"https://www.instagram.com"}/>
                </div>
            </div>
            <Copyright />
        </div>
    );
};

export default Home;
