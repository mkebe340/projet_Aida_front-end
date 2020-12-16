
import React from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import APropos from '../Pages/APropos';
import Inspirations from '../Pages/Inspirations'

class Home extends React.Component {


    render() {
        return (
            <div >

                <div className='container' >

                    <div className='row'>
                        <div className="home__img col-8 mt-5">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">

                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" ></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>

                                </ol>
                                <div className="carousel-inner ">
                                    <div className="carousel-item active  ">
                                    <button className="button__color" > <Link to="/Inspirations">  <img src="./img/echecs.png" alt="deux personnes jouent aux echecs" className="img-fluid" /></Link></button> 
                                        <div className="carousel-caption">

                                            {/* <p>Crédit photo : </p>*/}
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                      <button className="button__color"> <Link to="/Inspirations">  <img src="./img/art_femme.jpeg" alt="une femme qui regard de l'art africaine" className="img-fluid" /></Link></button>
                                        <div className="carousel-caption">

                                            {/* <p>crédit photo : </p>*/}
                                        </div>
                                    </div>

                                    <div className="carousel-item  ">
                                     <button className="button__color"> <Link to="/Inspirations"> <img src="./img/voile.jpg" alt="une femme" className="img-fluid" /> </Link> </button>
                                        <div className="carousel-caption">
                                            {/* <p>crédit photo : </p>*/}

                                        </div>
                                    </div>

                                    <div className="carousel-item  ">
                                     <button className="button__color"> <Link to="/Inspirations"> <img src="./img/gens_jpeg.jpg" alt="une foule" className="img-fluid" /> </Link> </button>
                                        <div className="carousel-caption">
                                            {/* <p>crédit photo : </p>*/}

                                        </div>
                                    </div>

                                   
                                </div>

                                <a href="#carouselExampleCaptions" className="carousel-control-prev" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a >
                                <a href="#carouselExampleCaptions" className="carousel-control-next" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a >

                            </div>
                        </div>
                        <div className=' col-4 align-self-center home__text'>
                            <h1> Titre Home </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque magnam nulla aut recusandae veritatis reprehenderit magni exercitationem harum officia molestiae numquam
                             odit, quis fugit delectus? Voluptatem qui rem aliquid.</p>
                            <Link to='/APropos'>
                                <div className="home__button"><button> A props</button></div>
                            </Link>
                        </div>



                    </div>


                </div>



            </div>

        )
    }
};



export default Home;

{/* <div className=" col-4 mt-5 ">
                        <div className='boite1  mt-5  '>
                                <h1>BOITE 1</h1>
                            </div>
                        <div className='boite2  mt-5  '>
                                <h1>BOITE 2</h1>
                            </div>

                            <div className='boite2  mt-5 '>
                                <h1>BOITE 3</h1>
                        </div>
                      </div>*/}