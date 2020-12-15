
import React from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import APropos from '../Pages/APropos';

class Home extends React.Component {

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
                                <button> A props</button>
                            </Link>
                        </div>

                        <div className=" col-4 mt-5">
                            <div className='boite1'>
                                <h1>BOITE 1</h1>
                            </div>


                            <div className='boite2  mt-5  '>
                                <h1>BOITE 2</h1>
                            </div>

                            <div className='boite2  mt-5 '>
                                <h1>BOITE 3</h1>
                            </div>

                        </div>
                    </div>


                </div>



            </div>

        )
    }
};



export default Home;     