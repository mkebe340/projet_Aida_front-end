import React from 'react';
import '../style/QuiSommesNous.css';

class QuiSommesNous extends React.Component {

    render() {
        return (


            <div className="">
                <h3> Nos Inspires </h3>


                <div className="container">


                    <div className="row">
                        <div className="slide1  col-6 col-xs-12 ">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <img src="../img/Portrait.jpg" alt="..." className="img-fluid"/>
                                        <div className="carousel-caption">

                                            {/* <p>Crédit photo : </p>*/}
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="../img/Report_3.jpg" alt="..." className="img-fluid"/>
                                        <div className="carousel-caption">

                                            {/* <p>crédit photo : </p>*/}
                                        </div>
                                    </div>
                                    <div className="carousel-item  ">
                                        <img src="../img/Report_1.jpg" alt="..." className="img-fluid" />
                                        <div className="carousel-caption">


                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>

                            </div>

                        </div>
                        <div className="Texte1 col-6 col-xs-12 text-justify">

                            
                                <h3>Aïda TOUIHRI, fondatrice d'INSPIRENEWS</h3>
                                
                             <p> Après des études de médecine et de psychologie à Lyon, Aïda Touihri découvre le journalisme lors de la Coupe du Monde de Football 1998. 
                                Bénévole pendant toute la compétition, elle travaille au sein du centre de presse à Paris et découvre le métier de journaliste : une révélation.</p>

                                <p>En 2000, elle remporte le concours des Espoirs François Chalais du Jeune Reporter. Elle entre alors la rédaction nationale de France Inter, d’abord 
                                au service des informations générales, puis en présentation des différentes éditions des journaux avant de réaliser son premier rêve : journaliste sportive.</p>

                                <p>Après trois années dans le service public de Radio France, elle démissionne et s’expatrie en Algérie pour raisons familiales : l’occasion pour Aïda Touihri 
                                de travailler pour la presse écrite (Jeune Afrique, Afrique Magazine), la radio (RMC, France Inter, Radio orient) et la télévision (Arte).</p>

                                <p> Deux ans plus tard, elle revient en France où elle intègre la rédaction de M6. Présentatrice et rédactrice en chef du journal de 12.45, elle lance à la 
                                rentrée 2006 le nouveau magazine d’informations de la chaîne, 66 minutes. Dans le même temps, elle réalise plusieurs chroniques sur France Info, présente 
                                une émission d’interviews sur Le Mouv', 
                                et une autre de débats sur Public Sénat. </p>
                                
                                
                                <p> En septembre 2012, Aïda Touihri arrive sur France 2 à la tête du magazine culturel « Grand Public ». A partir de septembre 2014, 
                                elle présente en parallèle l’émission de reportages en immersion « Cité Gagnant »sur LCP-AN, La Chaîne Parlementaire.  Elle rejoint en 2015  le groupe Canal +, d’abord 
                                aux côtés de Laurence Ferrari dans le talk-show « Le Grand 8 » sur D8. Elle anime la quotidienne « MidiSport » sur Canal + à la rentrée 2016 avant de se voir confier 
                                la Matinale Weekend sur la chaîne d’information en continu CNEWS. </p> 

                                <p>Depuis janvier 2019, elle réalise et produit la série de reportages « Engagez-Vous ! » sur la chaîne RMC STORY. Depuis septembre 2020, toujours sur RMC STORY,  
                                elle présente et co-produit le magazine de société « MAG STORY ».</p> 
                        </div>
                    </div>
                </div>


            </div>




        )
    }
};



export default QuiSommesNous;