import React from 'react';
import '../style/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Contact extends React.Component {

    copyCodeToClipboard = () => {
        this.textArea.select();
        document.execCommand("copy")

    }

    
    render() {
        return (

            <div>
               <div className="mb-5 "><h1>Contact </h1></div> 
              
                <div className="box__chat">
                    <div className="chat">
                        <div className="chat__header">
                            <div className="chat__headerInfo">
                                <h3>Room name</h3>
                                <p>Last seen at...</p>
                            </div>
                        </div>
                        <div className="chat__body">
                            <p className="chat__message chat__reciever">
                                <span className="chat__name">Aida</span>
                                    This is a message, Lorem ipsum dolor sit amet,
                                     consectetur adipisicing elit. Voluptatum architecto ut,
                                      totam labore quis debitis facere laborum autem distinctio,
                                       ullam blanditiis voluptatem! 
                                    <span className="chat__timestamp">
                                    {new Date().toUTCString()}
                                </span>
                            </p>

                            <p className="chat__message">
                                <span className="chat__name">Visiteur</span>
                                <div className="copy">
                                <form className="form__copy">
                                    <textarea ref={(textarea) => this.textArea = textarea} value="adresse@email.com" />
                                </form>
                                <button onClick={() => this.copyCodeToClipboard()}>copy</button>
                                </div>
                                <span className="chat__timestamp">
                                {new Date().toUTCString()}
                                </span>
                            </p>

                        </div>
                        <div className="chat__footer">
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