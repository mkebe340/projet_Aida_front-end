
import React from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import APropos from '../Pages/APropos';

class Home extends React.Component {
    constructor() {
        super();
        this.click = this.click.bind(this)
        this.state = {
            list: []
        }
    }

    componentDidMont() {
        fetch('http://localhost:3000/articles/')
            .fetch(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({ list: json })
            })
    }


    click(url) {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    type: "bleu",
                    theme: 'societal',
                    titre: "Les inspir",
                    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque magnam nulla aut recusandae veritatis reprehenderit magni exercitationem harum officia molestiae numquam",
                    description: "un pays original",
                    imgUrl: "../img/happyMan.jpg",
                })
            })
    }

    render() {
        return (
            <div >

                <div className='container' >

                    <div className='row justify-content-around'>

                        <div className='col-6 mt-5 align-self-center home__text'>
                            <h1> Titre Home </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque magnam nulla aut recusandae veritatis reprehenderit magni exercitationem harum officia molestiae numquam
                             odit, quis fugit delectus? Voluptatem qui rem aliquid.</p>
                            <Link to='/APropos'>
                                <div className="home__button"><button> A props</button></div>
                            </Link>
                        </div>

                        <div className=" col-4 mt-5 ">
                            {this.state.list.map((elm, index) => {
                                return (

                                    <div  onClick={() => this.click(elm.url)}>
                                        
                                        <div className='boite1'>
                                            <h3> titre{elm.titre} </h3>
                                            <p> {elm.description}</p>
                                            <p> {elm.texte}</p>
                                            <img className=''alt="..." src={elm.imageUrl[0]} />
                                        </div>
                                    </div>

                                )
                            
                            })}

                        </div>
                    
                    </div>


                </div>



            </div>

        )
    }
};



export default Home;     

{/*<div className='boite2  mt-5  '>
                                <h1>BOITE 2</h1>
                            </div>

                            <div className='boite2  mt-5 '>
                                <h1>BOITE 3</h1>
                        </div>*/}