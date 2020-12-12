import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Inspirations.css'


  

            class Inspirations extends React.Component {
                constructor() {
                    super();
                    this.click = this.click.bind(this)
                    this.state = {
                        list: [],
                        type: "",
                        theme: "",
                        description: "",
                        texte: "",
                        imageUrl: "",
                        videoUrl:"",
                        
                    }
                }

                componentDidMount() {
                    // on récupére la liste des articles au démarage de l'application
                    fetch('https://http://localhost:3000/admin/liste')
                        .then(res => res.json())
                        .then(json => {
                            console.log(json)
                            this.setState({
                                list: json.list
                            })
                        })
                }

                click(url) {
                    // url corresponds aux informations que nous devons récupérer sur le dashboard selectionné
                    fetch(url)('https://http://localhost:3000/admin/liste')
                        .then(res => res.json())
                        .then(json => {
                            console.log(json)
                            // les titres et articles avec video et poadcast
                            this.setState({
                                currentPost: json ()
                            })
                        })
                }
                render() {
                    return (
                        <div className="inspirations">
                            <section className="articles">
                                {this.state.post ?
                                    (<div className="articles-info">
                                        <img className="photo" src={`http://localhost:3000/admin/liste${this.state.currentArticle.imgage[0]}.png`}></img>
                                        <div>
                                {/*reprendre schema de fatima*/}
                                            <p><b>type:</b> {this.state.currentArticle.name}</p>
                                            <p><b>theme :</b>{this.state.currentArticle.theme}</p>
                                            <p><b>description :</b>{this.state.currentArticle.description}</p>
                                            <p><b>texte :</b>{this.state.currentArticle.description}</p>
                                            <p><b>imageUrl :</b>{this.state.currentArticle.imageUrl}</p>
                                            <p><b>videoUrl :</b>{this.state.currentArticle.videoUrl}</p>
                                   
                                    <link className="video" src={`https://url video /${this.state.currentArticle.id}`}></link>

                                        </div>
                                    </div>) :
                                    (<h1>titre selectionner</h1>)
                                }
                            </section>
                            <section>
                                {this.state.list.map((elem, index) => {
                                    return (
                                        <button onClick={() => this.click(elem.url)}>
                                            <img src={`hhttp://localhost:3000/admin/liste${index + 1}.png`}></img>
                                            <p>{elem.name}</p>
                                        </button>
                                    )
                                })}
                            </section>
                        </div>
                    );
                }
            }
              
        

    
    
    export default Inspirations;













       {/* <div> <h3> Nos Inspires </h3>

            <div class="container1">
                <div class="row">
                    <div class="color3 carre  col order-last">
                        <div className='titre'>
                            <h3> <a href="#" title='titre'>Titre </a> </h3>
                        </div>
                        <div className='text'>

                            <p><a href="#" text='text'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum."</a></p>
                        </div>

                        <div className='img_video_Podcast'> <a href="https://www.youtube.com/watch?v=7VNiizcVH6Y" title='titre'>
                            <img className='photo' src="../img/aidaTV.png" alt="image Aida" /> </a>

                            <div className='text'>

                                <p><a href="#" text='text'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum."</a></p>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="color3 carre  col order-last">
                            <div className='titre'>
                                <h3> <a href="#" title='titre'>Titre </a> </h3>
                            </div>
                            <div className='text'>

                                <p><a href="#" text='text'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum."</a></p>
                            </div>

                            <div className='img_video_Podcast'> <a href="https://www.youtube.com/watch?v=7VNiizcVH6Y" title='titre'>
                                <img className='photo' src="../img/aidaTV.png" alt="image Aida" /> </a>

                                <div className='text'>

                                    <p><a href="#" text='text'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum."</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="color3 carre  col order-last">
                                <div className='titre'>
                                    <h3> <a href="#" title='titre'>Titre </a> </h3>
                                </div>
                                <div className='text'>

                                    <p><a href="#" text='text'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum."</a></p>
                                </div>

                                <div className='img_video_Podcast'> <a href="https://www.youtube.com/watch?v=7VNiizcVH6Y" title='titre'>
                                    <img className='photo' src="../img/aidaTV.png" alt="image Aida" /> </a>

                                    <div className='text'>

                                        <p><a href="#" text='text'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum."</a></p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
       </div>*/}



