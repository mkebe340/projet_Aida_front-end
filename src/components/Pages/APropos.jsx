import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/APropos.css'
class APropos extends React.Component {

    render() {
        return (

            <div >
                <h1>Titre A propos </h1>
                <div className='container'>

                    <div className='image'>
                        <img src='./img/dog.jpg' alt='description' />
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Pariatur expedita
                            officia, quaerat aliquid adipisci
                            rerum praesentium voluptas aut itaque
                            nostrum non, rem, quos harum vel minus.
                            Fuga officiis nulla maiores? <br/>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Quasi at nisi, commodi ea 
                            similique quam tempore inventore sunt qui dolorum quo,
                             est repellendus error labore suscipit esse quibusdam 
                             non provident?
                             Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Pariatur expedita
                            officia, quaerat aliquid adipisci
                            rerum praesentium voluptas aut itaque
                            nostrum non, rem, quos harum vel minus.
                            Fuga officiis nulla maiores?
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Quasi at nisi, commodi ea 
                            similique quam tempore inventore sunt qui dolorum quo,
                             est repellendus error labore suscipit esse quibusdam 
                             non provident?
                        </p>
                    </div>


                </div>
            </div>

        )
    }
};



export default APropos;