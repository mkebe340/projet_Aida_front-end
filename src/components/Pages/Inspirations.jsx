import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Inspirations.css'


class Inspirations extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this)
    this.state = {

      list: []

    }
  }

  componentDidMount() {
    // Nous récupérons la liste  du dashboard
    fetch('http://localhost:3000/articles')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({ list: json })
      })
  }

  click(url) {
    // url corresponds aux informations que nous devons récupérer sur le pokemon selectionner
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        // nous stokons dans currentPokemon les informations du pokemon selectionner

      })
  }
  render() {
    return (
      <div className="Inspirations">

        <section className='container1'>
          {this.state.list.map((elem, index) => {


            return (

              
                <div className="row green" onClick={() => this.click(elem.url)}>
                  <div className="bulles carre order-last">
                  <div className="color3 carre order-last">

                    <div className='titre'>
                      <h3> {elem.titre} </h3>
                    </div>

                    <div className='description'>
                      {elem.description}
                    </div>

                    <div className='text'>
                      {/* {elem.texte} */}
                      <div className="content" dangerouslySetInnerHTML={{ __html: elem.texte }}></div>

                    </div>

                    <div className='img_video_Podcast'>
                      <img className='' src={elem.imageUrl[0]} />
                    </div>

                    <div className='img_video_Podcast'>
                      <iframe className='' src={elem.videoUrl} />
                    </div>

                    
                  </div>
                </div>
                </div>
            )
          }
          )
          }
        </section>

      </div >

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




