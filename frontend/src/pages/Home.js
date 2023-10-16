import React from 'react';
import Navbar from '../components/Navbar';
import c1 from "../images/c1.jpeg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.webp";
import { Carousel } from 'react-bootstrap';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <div className='container-fluid'>
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c1}
                            alt="Slide 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c2}
                            alt="Slide 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c3}
                            alt="Slide 3"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c4}
                            alt="Slide 4"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container mt-5'>
                <div class="about">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="titlepage mt-5 py-5">
                                    <h2>About Us</h2>
                                    <p>Nestled along the sun-kissed shores, The Kings Bay Hotel stands as a beacon of seaside luxury. With a prime beachfront location, our hotel offers a tranquil escape amidst the rhythm of the ocean waves. Immerse yourself in comfort within our elegantly designed rooms, each offering panoramic views of the azure waters. At The Kings Bay Hotel, we blend unparalleled hospitality with the natural beauty of the beach, providing a serene haven for travelers seeking relaxation and adventure. Experience coastal elegance, exquisite dining, and warm, personalized service at our charming beachfront retreat. Your coastal getaway begins here, where every moment is infused with the essence of beachside bliss.</p>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="about_img">
                                    <figure><img src={c1} className="img-fluid h-100 rounded" alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;
