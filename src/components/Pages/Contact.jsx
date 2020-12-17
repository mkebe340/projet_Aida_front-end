import React from 'react';
import '../style/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Avatar, IconButton } from '@material-ui/core';

class Contact extends React.Component {

    copyCodeToClipboard = () => {
        this.textArea.select();
        document.execCommand("copy")

    }


    render() {
        return (

            <div className="">
                <h1>Contact </h1>
                <div className="row justify-content-center contact_fond">

                    <div className="box__contact mb-3 col-md-3 col-sm-12">

                        <div className="contact mb-2 mt-2 ">
                            {/*------------------Header*/}
                            <div className="contact__header">
                                <div className="contact__headerInfo d-flex">
                                    <Avatar />
                                    <h3>InspireNews</h3>
                                </div>
                                    
                                
                            </div>
                            {/*------------------body*/}
                            <div className="contact__body">
                                <p className="contact__message contact__reciever">
                                    <span className="contact__name">Aida</span>
                                    This is a message, Lorem ipsum dolor sit amet,
                                     consectetur adipisicing elit. Voluptatum architecto ut,
                                      totam labore quis debitis facere laborum autem distinctio,
                                       ullam blanditiis voluptatem!
                                    <span className="contact__timestamp">
                                        {new Date().toUTCString()}
                                    </span>
                                </p>

                                <p className="contact__message">
                                    <span className="contact__name">Visiteur</span>
                                    <div className="copy">
                                        <form className="form__copy">
                                            <textarea ref={(textarea) => this.textArea = textarea} value="adresse@email.com" />
                                        </form>
                                        <button onClick={() => this.copyCodeToClipboard()}>copy</button>
                                    </div>
                                    <span className="contact__timestamp">
                                        {new Date().toUTCString()}
                                    </span>
                                </p>
                            </div>
                            {/*------------------Footer*/}
                            <div className="contact__footer">
                                <div>
                                    <div className="faux__input">

                                        clique sur le boutton
                                </div>
                                    <button type="submit">
                                        <a href='mailto: addresse@email.com'>send an email</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
};



export default Contact;


{/*  <div className="container test ">
                    <div className='row justify-content-center'>
                        <div className="col-6 color mt-5 ">
                            <div className="mt-3"> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Earum temporibus dolorum maxime voluptates magni vel
                            reprehenderit rem? Asperiores nam nostrum earum eos,
                            incidunt quo, ducimus neque, nemo optio cumque
                             ratione.</p>

                             </div> 
                           


                        </div>



                        <div className="row">
                            <div className="col-6 " >

                                <form>
                                  <p> nom de l'assos: <input className='text' ></input></p>
                                  <p> email: <input className='text' ></input></p>
                                  <p> message: <input className='text' ></input></p>
                                </form>
                                <button>envoyer</button>
                            </div>
                        </div>
                    </div>
        </div> */}