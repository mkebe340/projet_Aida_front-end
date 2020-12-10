import React from 'react';
import '../style/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Contact extends React.Component {

    render() {
        return (

            <div>
                <h1>Contact </h1>
                <div className="container test ">
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
                </div>
            </div>

        )
    }
};



export default Contact;